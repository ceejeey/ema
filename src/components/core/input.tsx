import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function Input({ control, name, rules = {}, placeholder }) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className=' p-2 py-3  border-b border-gray-500 mb-4'
            />

            {error && <Text className='text-red-500'> {error?.message || 'Error'}</Text>}
          </View>
        )}
        name={name}
        defaultValue=''
      />
    </>
  )
}
