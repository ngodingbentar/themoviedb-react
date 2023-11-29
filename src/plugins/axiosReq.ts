import axios from 'axios'

const Axios = axios.create({
  baseURL: '/api',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TOKEN
  }
})

export default Axios