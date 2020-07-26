import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost/api/v1/'
})

export default API
