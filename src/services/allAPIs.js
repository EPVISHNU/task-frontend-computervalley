import { baseUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const registerAPI=async(user)=>{
    return await commonAPI('post',`${baseUrl}/register`,user,"")
}


export const loginAPI=async(user)=>{
    return await commonAPI('post',`${baseUrl}/login`,user,"")
}

export const AddFormAPI = async(reqBody,reqHeader) => {
    return await commonAPI("post",`${baseUrl}/form/regdata`,reqBody,reqHeader)
    
}


export const resetPassAPI = async (userId, newPassword) => {
    try {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json'
        };

        const response = await commonAPI("post", `${baseUrl}/home/reset-password`, { userId, newPassword }, reqHeader);
        return response.data; 
    } 
    catch (error) {
        console.log(error.response.data)
    }
};

