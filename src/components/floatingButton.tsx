import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const FloatingButton = () => {
  return (
    <TouchableOpacity className='absolute w-16 h-16 rounded-full items-center justify-center right-8 bottom-16 '>
      <Ionicons name='add-circle' size={50} color='black' />
    </TouchableOpacity>
  )
}

export default FloatingButton
