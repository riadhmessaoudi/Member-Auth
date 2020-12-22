import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FETCH_MEMBER_SUCCESS,
    FETCH_MEMBER_FAIL,
    SIGN_OUT,
} from '../actions/memberAction';

const memberState = { isLoggedInMember: false, member: {} }

const userReducer = (state = memberState, action) => {

    switch (action.type) {

        case FETCH_MEMBER_SUCCESS:

            return {
                ...state,
                member: action.payload,
                isLoggedInMember: true
            }

        case FETCH_MEMBER_FAIL:

            return {
                ...state,
                member: {},
                isLoggedInMember: false
            }

        case LOGIN_SUCCESS:

            return {
                ...state,
                member: action.payload,
                isLoggedInMember: true
            }


        case LOGIN_FAIL:

            return {
                ...state,
                member: {},
                isLoggedInMember: false
            }

        case REGISTER_SUCCESS:

            return {
                ...state,
                member: action.payload,
                isLoggedInMember: true
            }

        case REGISTER_FAIL:

            return {
                ...state,
                member: {},
                isLoggedInMember: false
            }
        
        case SIGN_OUT :

            return {
                ...state,
                member: {},
                isLoggedInMember: false
            }

        default:

            return state

    };

};

export default userReducer;