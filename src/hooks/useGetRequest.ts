import axiosInstance from '@/config/axios'
import { useQuery } from '@tanstack/react-query'

// Interface to handle errors with more specific properties
interface RequestError extends Error {
  response?: {
    data?: {
      message?: string
    }
  }
}

// Reusable function to perform GET requests
// path: the endpoint to send the GET request to
export const getRequestFn = async (path: string): Promise<any> => {
  try {
    // Send GET request to the specified path
    const res = await axiosInstance.get(path)
    // Return the data from the response
    return res.data.data
  } catch (error) {
    // Cast error to RequestError type
    const requestError = error as RequestError
    // Extract error message from the response or use a default message
    const errorMessage =
      requestError?.response?.data?.message || requestError.message || 'An error occurred'
    // Throw a new error with the extracted message
    throw new Error(errorMessage)
  }
}

// Interface for the return type of the useGetRequest hook
interface UseGetRequestReturn {
  data: any
  isLoading: boolean
  error: Error | null
  refetch: () => void
  isFetching: boolean
  isSuccess: boolean
}

// Custom hook to fetch data using react-query's useQuery
// path: the endpoint to send the GET request to
// key: the query key for react-query caching
// enabled: boolean to enable or disable the query
const useGetRequest = (path: string, key: string, enabled = true): UseGetRequestReturn => {
  // Use the useQuery hook to fetch data and handle states
  const { data, isLoading, error, refetch, isFetching, isSuccess } = useQuery({
    queryKey: [key], // Unique query key for caching
    queryFn: () => getRequestFn(path), // Function to fetch data
    enabled, // Whether the query should automatically run
    retry: 0, // Number of retry attempts on failure
  })

  // Return relevant states and functions from the useQuery hook
  return { data, isLoading, error, refetch, isFetching, isSuccess }
}

export default useGetRequest
