import axios from 'axios';
import dotenv from 'dotenv';

const API_KEY = dotenv.config();

export default {
    getImages: (input) => {
        return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${input.replace(" ", "+")}`)
    }
}