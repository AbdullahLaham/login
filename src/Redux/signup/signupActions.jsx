import { SIGNUP_REQUEST,  SUCESS_SIGNUP, FAILED_SIGNUP} from "./signupTypes";
export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST,
    }
}
export const successSignup = (data) => { 
     return {
        type: SUCESS_SIGNUP,
        payload: data,
     }
}
export const faieldSignup = (error) => { 
     return {
        type: FAILED_SIGNUP,
        payload: error,
     }
}
