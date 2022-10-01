import axios from 'axios';

const omdb = axios.create({
  baseURL: "http://www.omdbapi.com/",
  timeout: 15000,
  params: {
    apikey: "5b02edf8"
  }
});

export {omdb};