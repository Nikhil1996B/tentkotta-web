import { config, themeConfig } from "./config";
import { encrypt } from "../helpers";

export const apiTokenService = {
  login,
  logout,
};

async function login() {
  const pwd = await encrypt(config.apiPassword);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: config.apiUser,
      password: pwd,
    }),
  };
  return fetch(`${config.apiUrl}${config.getApiToken}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("apiToken", user.token);
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("apiToken");
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }
      const error =
        (data && (data.error || data.message)) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
