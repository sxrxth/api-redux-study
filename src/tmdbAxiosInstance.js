import axios from "axios";

const tmdbAxiosInstance=axios.create({
    baseURL:"https://fakestoreapi.com/products"
})

export default tmdbAxiosInstance;