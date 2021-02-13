import { signOut } from "./config";
import { encrypt } from "../helpers";
import { handleResponse } from './siginservice';
import {
    browserName,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import Cookies from 'js-cookie';
export const signUpService = {
    signUp
}

async function signUp(username, password) {
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
    return fetch(`${signOut.apiUrl}${signOut.getApiToken}`, requestOptions)
        .then(handleResponse)
        .then((userExists) => {
            Cookies.set('signInStatus', JSON.stringify(userExists), { expires: 7 });
            return userExists;
        });
}