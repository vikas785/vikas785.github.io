import axios from 'axios'

const url="https://reqres.in/api"

export const verifyLogin = async (data) => {
    return await axios.post(
        `${url}/login`,data
        ).then(response=>{
            return response
        }).catch(error=>{
            return error.response
        });
    
}