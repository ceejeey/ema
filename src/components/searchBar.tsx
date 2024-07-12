import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Animated from 'react-native-reanimated'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { AntDesign, Feather } from '@expo/vector-icons'

const SearchBar = (props) => {
  const { searchQuery, setSearchQuery } = props
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Shared value for animation
  const animation = useSharedValue(0)

  // Animated style for the search input
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming('100%', { duration: 500 })
          : withTiming(0, { duration: 500 }),
    }
  })

  return (
    <View
      className='flex justify-end items-end box-border  w-full'
      style={{ paddingRight: isSearchOpen ? 0 : 40 }}
    >
      <Animated.View
        className='w-full rounded-xl flex flex-row items-center bg-[#e7e7e7]'
        style={[animatedStyle]}
      >
        <TextInput
          placeholder='Search by name'
          value={searchQuery}
          onChangeText={setSearchQuery}
          className='w-[95%] p-2 py-3'
        />

        <TouchableOpacity
          onPress={() => {
            if (animation.value == 1) {
              setIsSearchOpen(false)
              setSearchQuery('')
              animation.value = 0
            } else {
              setIsSearchOpen(true)
              animation.value = 1
            }
          }}
        >
          {isSearchOpen ? (
            <AntDesign name='close' size={24} color='black' className='text-white flex w-8  h-8 ' />
          ) : (
            <Feather name='search' size={24} color='black' className='text-white flex w-8  h-8 ' />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default SearchBar
