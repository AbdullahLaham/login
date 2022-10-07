import { LOGIN_REQUEST,  SUCEES_LOGIN, FAILED_LOGIN} from "./loginTypes";
export const loginRequest = () => {
    console.log('request')
    return {
        type: LOGIN_REQUEST, 
    }
}
export const sucessLogin = (data) => { 
    const {email, token, isAdmin} = data;
     return {
        type: SUCEES_LOGIN,
        payload: {email: email, token: token, isAdmin: isAdmin},
     }
}
export const faieldLogin = (error) => {
    console.log('failed')
     return {
        type: FAILED_LOGIN,
        payload: error,
     }
}
