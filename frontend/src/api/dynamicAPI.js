import axios from 'axios'
import { config } from '../utils/customLocalStorage'

const base_url = "http://ec2-3-133-91-140.us-east-2.compute.amazonaws.com:5000"
// const base_url = "http://localhost:5000"

const dynamicAPI = async (method, url, obj = {}) => {
  try {
    switch (method) {
      case 'get':
        return await axios
          .get(`${base_url}${url}`, config())
          .then((res) => res.data)

      case 'post':
        return await axios
          .post(`${base_url}${url}`, obj, config())
          .then((res) => res.data)

      case 'put':
        return await axios
          .put(`${base_url}${url}`, obj, config())
          .then((res) => res.data)

      case 'delete':
        return await axios
          .delete(`${base_url}${url}`, config())
          .then((res) => res.data)
    }
  } catch (error) {
    throw error.response.data.error
  }
}

export default dynamicAPI
