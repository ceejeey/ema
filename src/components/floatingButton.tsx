import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Modal } from './modal'
import AddEmployeeForm from './addEmployeeForm'

const FloatingButton = () => {
  const [isAddEmployeeFormOpen, setIsAddEmployeeFormOpen] = useState(false)

  return (
    <TouchableOpacity className='absolute w-16 h-16 rounded-full items-center justify-center right-8 bottom-16 '>
      <TouchableOpacity onPress={() => setIsAddEmployeeFormOpen(true)}>
        <Ionicons name='add-circle' size={50} color='black' />
      </TouchableOpacity>
      <Modal isOpen={isAddEmployeeFormOpen} className='bg-black h-full'>
        <AddEmployeeForm onModalChange={setIsAddEmployeeFormOpen} />
      </Modal>
    </TouchableOpacity>
  )
}

export default FloatingButton
