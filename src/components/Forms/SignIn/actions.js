import { signinService } from "../../../services";
import { signInConstants, preAuthValidation, resetPwdEmail, resetAccessToken } from "./constants";


export const signinActions = {
  signin,
  signout,
  preSignInAuth,
  resetSignInParams,
  resetPwdEmailSend,
  rotateAccessTokenExpiration
};

function signin(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));
    signinService.signin(username, password).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error.toString()));
        //dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: signInConstants.SIGNIN_REQUEST, user };
  }
  function success(user) {
    return { type: signInConstants.SIGNIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: signInConstants.SIGNIN_FAILURE, error };
  }
}


function signout() {
  signinService.signout();
  return { type: signInConstants.SIGNOUT };
}


function preSignInAuth(username) {
  return (dispatch) => {
    dispatch(presigninrequest({ username }));
    signinService.preSignInAuth(username).then(
      (user) => {
        dispatch(presigninsuccess({ username, ...user }));
      },
      (error) => {
        dispatch(presigninfailure(error));
      }
    );

  }
}

function presigninrequest(user) {
  return { type: preAuthValidation.EMAIL_ADDRESS_EXIST_REQUEST, user };
}
function presigninsuccess(user) {
  return { type: preAuthValidation.EMAIL_ADDRESS_EXIST_SUCCESS, user };
}
function presigninfailure(error) {
  return { type: preAuthValidation.EMAIL_ADDRESS_EXIST_FAILURE, error };
}


// Reset Sigin
function resetSignInParams() {
  return { type: signInConstants.RESET_SIGIN };
}



// Reset password email 
function resetPwdEmailSend(username) {
  return (dispatch) => {
    dispatch(rstPwdEmailrequest({ username }));
    signinService.rstPwdEmail(username).then(
      (user) => {
        dispatch(rstPwdEmailsuccess({ username, ...user }));
      },
      (error) => {
        dispatch(rstPwdEmailfailure(error));
      }
    );

  }
}

function rstPwdEmailrequest(user) {
  return { type: resetPwdEmail.RESET_PASSWORD_EMAIL_REQUEST, user };
}
function rstPwdEmailsuccess(user) {
  return { type: resetPwdEmail.RESET_PASSWORD_EMAIL_SUCCESS, user };
}
function rstPwdEmailfailure(error) {
  return { type: resetPwdEmail.RESET_PASSWORD_EMAIL_FAILURE, error };
}


// Rotate Access token key
function rotateAccessTokenExpiration(refreshToken) {
  return (dispatch) => {
    dispatch(resetAccesskeyrequest());
    signinService.rotateAccessKey(refreshToken).then(
      (response) => {
        dispatch(resetAccesskeysuccess(response));
      },
      (error) => {
        dispatch(resetAccesskeyfailure(error));
      }
    );

  }
}

function resetAccesskeyrequest(response) {
  return { type: resetAccessToken.RESET_ACCESS_TOKEN_REQUEST, response };
}
function resetAccesskeysuccess(response) {
  return { type: resetAccessToken.RESET_ACCESS_TOKEN_SUCCESS, response };
}
function resetAccesskeyfailure(error) {
  return { type: resetAccessToken.RESET_ACCESS_TOKEN_FAILURE, error };
}
