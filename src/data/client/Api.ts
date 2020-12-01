import axios from 'axios'

console.log(process.env.NEXT_PUBLIC_API_END_POINT)

const Api = axios.create({
  baseURL: 'https://migueis-api.herokuapp.com'
})

export default Api
