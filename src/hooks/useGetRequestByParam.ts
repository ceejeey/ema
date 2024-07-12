import axiosInstance from '@/config/axios'
import { useQuery } from '@tanstack/react-query'

/**
 * Determines the delimiter to be used in the URL based on whether the parameter
 * should be a query parameter or a path parameter.
 * @param isQueryParam - A boolean indicating if the parameter is a query parameter.
 * @returns A string representing the delimiter.
 */
const isQueryParamOrPath = (isQueryParam?: boolean): string => {
  return isQueryParam ? '?' : '/'
}

/**
 * Function to perform a GET request.
 * @param path - The endpoint to send the GET request to.
 * @param param - The parameter to include in the request URL.
 * @param isQueryParam - A boolean indicating if the parameter is a query parameter.
 * @returns The response data from the request.
 * @throws An error if the request fails.
 */
export const getRequestFn = async (
  path: string,
  param?: string,
  isQueryParam?: boolean
): Promise<any> => {
  try {
    if (param) {
      const res = await axiosInstance(`${path}${isQueryParamOrPath(isQueryParam)}${param}`, {
        method: 'GET',
      })
      return res?.data
    }
  } catch (error) {
    console.error('Request failed:', error)
    throw error
  }
}

/**
 * Custom hook to fetch data using react-query's useQuery with optional parameters.
 * @param path - The endpoint to send the GET request to.
 * @param key - The query key for react-query caching.
 * @param param - The parameter to include in the request URL.
 * @param enabled - Boolean to enable or disable the query.
 * @param isQueryParam - Boolean to indicate if the parameter is a query parameter.
 * @param refetchInterval - Interval in milliseconds to refetch the data.
 * @returns An object containing the query data and states.
 */
const useGetRequestByParam = (
  path: string,
  key: string | any[],
  param?: string,
  enabled = true,
  isQueryParam = false,
  refetchInterval: any = false
): {
  data: any
  isLoading: boolean
  error: any
  refetch: () => void
  isFetching: boolean
  isSuccess: boolean
} => {
  // Use the useQuery hook to fetch data and handle states
  const { data, isLoading, error, refetch, isFetching, isSuccess } = useQuery({
    queryKey: [key], // Unique query key for caching
    queryFn: () => getRequestFn(path, param, isQueryParam), // Function to fetch data
    enabled, // Whether the query should automatically run
    retry: 0, // Number of retry attempts on failure
    refetchInterval, // Interval in milliseconds to refetch the data
  })

  // Return relevant states and functions from the useQuery hook
  return { data, isLoading, error, refetch, isFetching, isSuccess }
}

export default useGetRequestByParam
