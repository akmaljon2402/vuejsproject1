import axios from "./axios"

const AuhtService = {
    register(user){
        return axios.post('/users',{user})
    },
}

export default AuhtService