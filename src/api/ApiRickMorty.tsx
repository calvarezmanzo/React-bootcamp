import axios from "axios";


const ApiRickMorty = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export default ApiRickMorty;