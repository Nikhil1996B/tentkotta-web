import {
    signIn,
    preSignInEmailVal,
    resetPass,
    resetPassEmail,
    rotateSignInKey
} from "./config";

import { encrypt } from "../helpers";
import {
    browserName,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import Cookies from 'js-cookie';

export const signinService = {
    preSignInAuth,
    signin,
    signout,
    resetPassword,
    rstPwdEmail,
    rotateAccessKey
};

async function preSignInAuth(username) {
    const auth = localStorage.getItem("apiToken");
    const requestOptions = {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Bearer ${auth}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email: username
        })
    };
    return fetch(`${preSignInEmailVal.apiUrl}${preSignInEmailVal.getApiToken}`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            return user;
        });
}

async function signin(username, password) {
    const pwd = await encrypt(password);
    var deviceID = browserName;
    const auth = localStorage.getItem("apiToken");
    const requestOptions = {
        method: "POST",
        headers: new Headers({
            'Authorization': `Bearer ${auth}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email: username,
            password: pwd,
            "deviceId": `${deviceID}`,
            "devicename": `${isMobile ? 'mobile' : 'web'} ${deviceID}`
        }),
    };
    return fetch(`${signIn.apiUrl}${signIn.getApiToken}`, requestOptions)
        .then(handleResponse)
        .then((userExists) => {
            Cookies.set('signInStatus', JSON.stringify(userExists), { expires: 7 });
            Cookies.set('username', JSON.stringify(username), { expires: 7 });
            return userExists;
        });
}

function signout() {
    // remove user from local storage to log user out
    localStorage.removeItem("apiToken");
}


async function rstPwdEmail(email) {
    const auth = localStorage.getItem("apiToken");
    var deviceID = browserName;
    const requestOptions = {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Bearer ${auth}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email,
            "deviceId": `${deviceID}`,
            "devicename": `${isMobile ? 'mobile' : 'web'} ${deviceID}`
        })
    };
    return fetch(`${resetPassEmail.apiUrl}${resetPassEmail.resetPassword}`, requestOptions)
        .then(handleResponse)
        .then((userExists) => {
            return userExists;
        });
}

async function resetPassword(code, pd) {
    var deviceID = browserName;
    const pwd = await encrypt(pd);
    const auth = localStorage.getItem("apiToken");
    const requestOptions = {
        method: "POST",
        headers: new Headers({
            'Authorization': `Bearer ${auth}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            code,
            newPassword: pwd,
            "deviceId": `${deviceID}`,
            "devicename": `${isMobile ? 'mobile' : 'web'} ${deviceID}`
        }),
    };
    return fetch(`${resetPass.apiUrl}${resetPass.getApiToken}`, requestOptions)
        .then(handleResponse)
        .then((userExists) => {
            return userExists;
        });
}

async function rotateAccessKey(idToken) {
    var deviceID = browserName;
    const auth = localStorage.getItem("apiToken");
    const requestOptions = {
        method: "POST",
        headers: new Headers({
            'Authorization': `Bearer ${auth}`,
            'Content-Type': 'application/json',
            'refreshtoken': `${idToken}`
        })
    };
    return fetch(`${rotateSignInKey.apiUrl}${rotateSignInKey.getAccessKeyToken}`, requestOptions)
        .then(handleResponse)
        .then((userExists) => {
            Cookies.set('signInStatus', JSON.stringify(userExists), { expires: 7 });
            return userExists;
        });
}


export function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto signout if 401 response returned from api
                signout();
            }
            const error =
                (data && (data.error || data.message)) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
