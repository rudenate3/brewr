import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.openbrewerydb.org/'
})

export { axiosClient }
