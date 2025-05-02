import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:"bb1b6afd2037403d8f36279f1a0e8937"
    },
})