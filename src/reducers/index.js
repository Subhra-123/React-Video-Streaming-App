import { combineReducers } from "redux";
import authReducers from "./authReducers";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth:authReducers,
    form:formReducer
})