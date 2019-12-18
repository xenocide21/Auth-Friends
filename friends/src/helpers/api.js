import axios from "axios" 
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/api';
export const axiosWithAuthTest = axios;

export function getToken() {
    return localStorage.getItem("token")
}



// export default function() {
//    return axios
//     .create ({
//         baseURL: '',
//
//     })
// }