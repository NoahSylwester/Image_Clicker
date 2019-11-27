import axios from 'axios';
import dotenv from 'dotenv';

const API_KEY = '14410776-c69a6ea84b5c2dc56d5dda714';

export default {
    getImages: (input) => {
        return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${input.replace(" ", "+")}`)
    }
}