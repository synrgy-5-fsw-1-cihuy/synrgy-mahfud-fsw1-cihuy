import axios from 'axios'
const API = axios.create({ baseURL: 'https://localhost:8080'})

export const fetchPosts = () => API.get(`/car`)
export const fetchPostsById = (id) => API.get(`/car/${id}`)
