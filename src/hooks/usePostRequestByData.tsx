import axiosInstance from '@/config/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Define types for post request function and mutation function parameters
type PostRequestParams = {
  path: string
  data: any
}

type MutateFunctionParams<T = any, E = any> = {
  path: string
  data: any
  onSuccess?: (result: T) => void
  onError?: (error: E) => void
}

// Function to perform POST request
const postRequestFn = async ({ path, data }: PostRequestParams) => {
  try {
    const res = await axiosInstance.post(path, data)
    return res.data?.data
  } catch (error) {
    console.log('Error in postRequestFn:', error)
    throw error
  }
}

// Reusable hook for POST request
const usePostRequestByData = ({ queryKey }) => {
  const queryClient = useQueryClient()

  const { mutate, isPending, error, data } = useMutation({
    mutationFn: postRequestFn,
    onSettled: () => {
      queryClient.invalidateQueries(queryKey) // Invalidate the query to refetch data
    },
    onError: (err) => {
      console.log('Error in usePostRequestByData:', err)
    },
  })

  return { mutate, isPending, error, data }
}

export default usePostRequestByData
