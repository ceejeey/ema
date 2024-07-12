import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Filter = (props) => {
  const { valueFrom, setValueFrom, valueTo, setValueTo, labelTo, labelFrom } = props

  return (
    <View className='flex flex-col  '>
      <View className='flex flex-row justify-between w-full  '>
        <View className='flex flex-col justify-between rounded w-[48%] h-20 text-gray-600  placeholder:text-gray-600'>
          <Text className='px-1 py-1 text-sm text-gray-600'> {labelFrom} </Text>
          <TextInput
            placeholder='AED'
            value={valueFrom}
            onChangeText={setValueFrom}
            className='w-[100%] p-3 text-black bg-["#e7e7e7"] rounded-lg flex flex-1'
          />
        </View>

        <View className='flex flex-col justify-between rounded  w-[48%] h-20 text-gray-600 placeholder:text-gray-600'>
          <Text className='px-1 py-1 text-sm text-gray-600'> {labelTo} </Text>
          <TextInput
            id='salary'
            placeholder='AED'
            value={valueTo}
            onChangeText={setValueTo}
            className='w-[100%] p-3 text-black bg-["#e7e7e7"] rounded-lg  flex flex-1'
          />
        </View>
      </View>
    </View>
  )
}

export default Filter
