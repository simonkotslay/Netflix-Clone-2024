import React from 'react';
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3'
})
export default instance;
// http://api.themoviedb.org/3/discover/movie?api_key=98f71968ee882b86584029e4a671719f&with_genres=35