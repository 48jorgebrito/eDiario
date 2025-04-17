import axios from "axios";

export const Api=axios.create({
    baseURL: 'http://localhost:8080'
})

export const CreateLogin = async(email, password) => {
    return Api.post('/login', {email, password})
}

