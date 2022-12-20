import axios from 'axios'
const API = axios.create({ baseURL: 'https://bootcamp-rent-car.herokuapp.com'})

export const fetchPosts = () => API.get(`/admin/car`)
export const fetchPostsById = (id) => API.get(`/admin/car/${id}`)
