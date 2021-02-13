import { pathOr } from 'ramda';
import { equals } from 'ramda';
import Cookies from 'js-cookie';

// get cookies value by name
export const getCookie = (name) => Cookies.get(name);

export const deleteCookie = (name) => Cookies.remove(name);

export const signedIn = getCookie('signInStatus') ? JSON.parse(getCookie('signInStatus')) : '';
export const isSignedIn = equals(200, pathOr('', ['responseCode'])(signedIn));
