import { ApiPostLogin, ApiPostMember, ApiFetchMember } from "../../services/member.service";
import { saveToken, removeToken } from "../../services/asyncStorage.service";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const FETCH_MEMBER_SUCCESS = "FETCH_MEMBER_SUCCESS";
export const FETCH_MEMBER_FAIL = "FETCH_MEMBER_FAIL";
export const SIGN_OUT = "SIGN_OUT";

export const fetchMember = (memberToken) => (dispatch) => {

    if(!memberToken)
    {
        dispatch({
            type: FETCH_MEMBER_FAIL,
        });
        removeToken()
        return false
    }

    return ApiFetchMember(memberToken).then(
        (data) => {

            if (data.response) {

                dispatch({
                    type: FETCH_MEMBER_SUCCESS,
                    payload: data.member,
                });
                return true

            } else {

                dispatch({
                    type: FETCH_MEMBER_FAIL,
                });
                removeToken()
                return false

            }

        },

    );
};

export const signInMember = (member_email, member_password) => (dispatch) => {
    return ApiPostLogin(member_email, member_password).then(
        (data) => {

            if (data.response) {

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data.member,
                });
                saveToken(data.member_token)
                return data
                
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                });

                return data
            }
        },
    );
};

export const signUpMember = (values) => (dispatch) => {
    return ApiPostMember(values).then(
        (data) => {
            if (data.response) {

                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: data.member,
                })
                saveToken(data.member_token)
                return data

            } else {

                dispatch({
                    type: REGISTER_FAIL,
                });
                return data

            }
        },

    );
};

export const signOutMember =  () => async (dispatch) => {

    dispatch({
        type: SIGN_OUT,
    });
    await removeToken()

};
