import axios from "axios";
import { apiParams } from "./apiParams";

export async function login({email, password}){
    try {
        let response = await axios.post(`${apiParams.apiRoot}/login`, 
        {email, password})
        return {status:response.status, data: response.data}
    } catch (error) {
        console.log(error);
    }
}

export async function getUser(token){
    try {
        let response = await axios.get(
            `${apiParams.apiRoot}/user/profil`,
            {
                headers: {"Authorization": "Bearer "+token}
            }
        )
        return {status:response.status, data: response.data}
    } catch (error) {
        console.log(error);
    }
}