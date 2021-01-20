import axios from 'axios';
import {signupUrl, loginUrl} from '../Utils/urls'
export const signUp = async (payload) => {

    try {
        console.log(signupUrl)
        const userData = await axios.post(signupUrl, payload);
        return userData.data
    } catch (error) {
        console.log(error)
        return {};
    }

}

export const login = async (payload) => {
    try {
        console.log(loginUrl)
        const userData = await axios.post(loginUrl, payload);
        return userData.data
    } catch (error) {
        console.log(error);
        return {}
    }

}