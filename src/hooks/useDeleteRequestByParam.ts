import axiosInstance from '@/config/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// Define types for post request function and mutation function parameters
type PostRequestParams = {
  path: string
}

// Function to perform POST request
const deleteRequestFn = async ({ path }: PostRequestParams) => {
  try {
    const res = await axiosInstance.delete(path)
    return res.data?.data
  } catch (error) {
    console.log('Error in postRequestFn:', error)
    throw error
  }
}

// Reusable hook for POST request
const useDeleteRequestByData = ({ queryKey }) => {
  const queryClient = useQueryClient()

  const { mutate, isPending, error, data } = useMutation({
    mutationFn: deleteRequestFn,
    onSettled: () => {
      queryClient.invalidateQueries(queryKey) // Invalidate the query to refetch data
    },
    onError: (err) => {
      console.log('Error in usePostRequestByData:', err)
    },
  })

  return { mutate, isPending, error, data }
}

export default useDeleteRequestByData
