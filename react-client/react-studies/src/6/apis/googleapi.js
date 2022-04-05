import axios from "axios";

const API_KEY = 'API_KEY';

export default axios.create({
    baseURL: 'https://translation.googleapis.com',
    params: {
        key: API_KEY
    }
});