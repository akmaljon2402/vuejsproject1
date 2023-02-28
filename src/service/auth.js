import axios from "./axios"

const AuhtService = {
    register(user){
        return axios.post('/users',{user})
    },
    login(user){
        return axios.post('/users/login',{user})
    },
}

export default AuhtService