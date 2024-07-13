import axios from 'axios'
import * as Burnt from 'burnt'

const axiosInstance = axios.create({
  baseURL: 'https://dummy.restapiexample.com/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('🚀 ~ error:', error)
    Burnt.toast({
      title: 'An error occurred',
      preset: 'error',
      message: error.response?.data?.message || error.message,
    })
    // Show a global error message

    return Promise.reject(error)
  }
)

export default axiosInstance
