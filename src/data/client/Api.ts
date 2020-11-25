import axios from 'axios'

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT
})

export default Api
