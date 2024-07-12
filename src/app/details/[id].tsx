import useGetRequestByParam from '@/hooks/useGetRequestByParam'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const list = () => {
  const { id } = useLocalSearchParams()
  // const route = useRouter();

  // const { id } = route.params;
  const {
    data: employeeDetails,
    isLoading: isEmployeeDetailsLoading,
    isFetching,
    isSuccess,
    refetch,
  } = useGetRequestByParam(`/v1/employee`, `details`, `${id}`)

  if (isEmployeeDetailsLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  return (
    <View
      // onPress={() => router.push({ pathname: '/details/[id]', params: { id: item.id } })}
      className='flex flex-col    w-full mt-10'
    >
      <View className='w-[50vw] h-[50vw] rounded-full bg-black mx-auto'>
        <Text className='text-3xl m-auto text-white'>N</Text>
      </View>
      <View className='m-auto flex flex-col gap-y-2  py-5'>
        <Text className='text-xl'>Name: {employeeDetails?.data?.employee_name}</Text>
        <Text className='text-xl'>Age: {employeeDetails?.data?.employee_age}</Text>
        <Text style={{ color: '#666' }}>Salary: {employeeDetails?.data?.employee_salary}</Text>
      </View>
    </View>
  )
}

export default list
