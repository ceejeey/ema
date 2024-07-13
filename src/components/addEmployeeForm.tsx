import { View, Text, Button } from 'react-native'
import React from 'react'
import usePostRequestByData from '@/hooks/usePostRequestByData'
import { useForm } from 'react-hook-form'
import Input from './core/input'
import * as Burnt from 'burnt'
import { AntDesign, Feather } from '@expo/vector-icons'

const AddEmployeeForm = ({ onModalChange }) => {
  const { mutate, isPending } = usePostRequestByData({ queryKey: 'employees' })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log('🚀 ~ AddEmployeeForm ~ errors:', errors)
  const onSubmit = (data) => {
    console.log(data)

    mutate(
      {
        path: `v1/create`,
        data: data,
      },
      {
        onSuccess: (data) => {
          Burnt.toast({
            title: 'Success',
            preset: 'done',
            message: 'Employee created successfully',
          })
          onModalChange(false)
        },

        onError: (error: any) => {
          console.log('🚀 ~ file: useAccountDetailsForm.tsx ~ line 316 ~ onsubmit ~ error', error)
        },
      }
    )
    // handle form submission
  }

  return (
    <View className='h-fit bg-white rounded-lg w-4/5 p-10'>
      <View className='flex flex-row items-center justify-between'>
        <Text className='text-left text-xl text-gray-600 py-4'>Add Employee Form</Text>
        <AntDesign
          name='close'
          size={18}
          color='black'
          className='text-white flex w-8  h-8 '
          onPress={() => onModalChange(false)}
        />
      </View>

      <Input
        control={control}
        name={'name'}
        rules={{ required: 'Name is required' }}
        placeholder='Enter employee name'
      />
      <Input
        control={control}
        name={'age'}
        rules={{
          required: 'Age is required',
          pattern: { value: /^[0-9]+$/, message: 'Age must be a number' },
        }}
        placeholder='Enter employee age'
      />
      <Input
        control={control}
        name={'salary'}
        rules={{
          required: 'Age is required',
          pattern: { value: /^[0-9]+$/, message: 'Age must be a number' },
        }}
        placeholder='Enter employee salary'
      />

      <Button
        title={isPending ? 'Submitting...' : 'Submit'}
        color='black'
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

export default AddEmployeeForm
