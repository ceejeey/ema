import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import useDeleteRequestByParam from '@/hooks/useDeleteRequestByParam'
import * as Burnt from 'burnt'

const SwipeableCard = ({ item }) => {
  const { mutate, isPending } = useDeleteRequestByParam({ queryKey: 'employees' })

  const onSubmit = (data) => {
    console.log(data)

    mutate(
      {
        path: `v1/delete/${item.id}`,
      },
      {
        onSuccess: (data) => {
          Burnt.toast({
            title: 'Success',
            preset: 'done',
            message: 'Employee deleted successfully',
          })
        },

        onError: (error: any) => {
          console.log('🚀 ~ file: useAccountDetailsForm.tsx ~ line 316 ~ onsubmit ~ error', error)
        },
      }
    )
    // handle form submission
  }
  const router = useRouter()
  const renderAction = () => {
    return (
      <TouchableOpacity
        className='flex flex-row bg-red-600 rounded items-center p-5 m-1'
        onPress={onSubmit}
      >
        <AntDesign name='delete' size={20} color='white' />
      </TouchableOpacity>
    )
  }

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderAction}>
        <TouchableOpacity
          onPress={() => router.push({ pathname: '/details/[id]', params: { id: item.id } })}
          className='flex flex-row justify-between  py-2 border-b border-b-gray-400'
        >
          <View className='w-[50px] h-[50px] rounded-full bg-black '>
            <Text className='text-base m-auto text-white'>N</Text>
          </View>
          <View className='w-[55%]'>
            <Text className='text-base'>Name: {item.employee_name}</Text>
            <Text className='text-base'>Age: {item.employee_age}</Text>
          </View>
          <View>
            <Text style={{ color: '#666' }}>Salary: {item.employee_salary}</Text>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

export default SwipeableCard
