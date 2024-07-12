import axios from 'axios'
// import * as Burnt from 'burnt'

const axiosInstance = axios.create({
  baseURL: 'https://dummy.restapiexample.com/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('🚀 ~ response:', response)
    return response
  },
  (error) => {
    console.log('🚀 ~ error:', error)
    // Burnt.toast({
    //   title: 'An error occurred',
    //   preset: 'error',
    //   message: error.response?.data?.message || error.message,
    // })
    // Show a global error message

    // Optionally, you can log the error or send it to a monitoring service here

    return Promise.reject(error)
  }
)

export default axiosInstance
