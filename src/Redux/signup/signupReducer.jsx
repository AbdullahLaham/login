import { SIGNUP_REQUEST,  SUCESS_SIGNUP, FAILED_SIGNUP} from "./signupTypes";
const initialState = {
    data: '',
    sucess: false,
    loading: false,
    error: ''
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SUCESS_SIGNUP:
            return {
                ...state,
                sucess: true,
                error: '',
                data: action.payload,
                loading: false,
            }
        case FAILED_SIGNUP:
            return {
                ...state,
                data: '',
                error: action.payload,
                sucess: false,
                loading: false,
            }
        default : return state
    }
}
export default signupReducer