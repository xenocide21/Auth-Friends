// import React from "react"
import axios from "axios"

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            authentication: token
        }
    })
}
// import axios from "axios"
// axios.defaults.withCredentials = true
// // axios.defaults.authorization = 'token'
// axios.defaults.baseURL = 'http://localhost:5000/api';
// axios.defaults.proxyurl = 'https://cors-anywhere.herokuapp.com/'
// export const axiosWithAuth = axios;
//
// export function getToken() {
//     return localStorage.getItem("token")
// }