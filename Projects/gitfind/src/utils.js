import axios from 'axios';

const github = axios.create({
  baseURL: "https://api.github.com/users",
  timeout: 15000
});


export { github };