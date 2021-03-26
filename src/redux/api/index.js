import axios from "axios";


const baseURL = "https://www.omdbapi.com/?apiKey=ffd0c3a5" // My Key "http://www.omdbapi.com/?i=tt3896198&apikey=14ec1a35"

export const apiCall = (url, data, headers, method ) => axios({
method,
url: baseURL + url,
data,
headers,
});