import { combineReducers, applyMiddleware, createStore } from 'redux'
import loginReducer from './login/loginReducer'
import signupReducer from './signup/signupReducer'
import logger from 'redux-logger'
const rootReducers = combineReducers({
    login: loginReducer,
    signup: signupReducer,
})
const store = createStore(rootReducers, applyMiddleware(logger))
export default store