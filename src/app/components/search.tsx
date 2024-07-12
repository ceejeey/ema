import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated from 'react-native-reanimated'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Filter from './filter'

const Search = (props) => {
  const { onFilter } = props
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [ageFrom, setAgeFrom] = useState('')
  const [ageTo, setAgeTo] = useState('')
  const [salaryFrom, setSalaryFrom] = useState('')
  const [salaryTo, setSalaryTo] = useState('')

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

  useEffect(() => {
    const handleApplyFilters = () => {
      onFilter({ searchQuery, ageFrom, ageTo, salaryFrom, salaryTo })
    }
    handleApplyFilters()
  }, [ageFrom, ageTo, salaryFrom, salaryTo, searchQuery])

  return (
    <View className='flex justify-end items-end box-border  w-full mb-5 gap-y-4'>
      <View
        className='flex justify-end items-end box-border  w-full'
        style={{ paddingRight: isSearchOpen ? 0 : 40 }}
      >
        <Animated.View
          className='w-full '
          style={[
            {
              // width: 300,
              height: 50,
              // paddingRight: isSearchOpen ? 40 : 0,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#e7e7e7',
            },
            animatedStyle,
          ]}
        >
          <TextInput
            placeholder='Search by name'
            value={searchQuery}
            onChangeText={setSearchQuery}
            className='w-[95%] p-2'
          />

          <TouchableOpacity
            onPress={() => {
              if (animation.value == 1) {
                setIsSearchOpen(false)
                animation.value = 0
              } else {
                setIsSearchOpen(true)
                animation.value = 1
              }
            }}
          >
            {isSearchOpen ? (
              <AntDesign
                name='close'
                size={24}
                color='black'
                className='text-white flex w-8  h-8 '
              />
            ) : (
              <Feather
                name='search'
                size={24}
                color='black'
                className='text-white flex w-8  h-8 '
              />
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View className='flex flex-col gap-y-2'>
        <Filter
          valueFrom={ageFrom}
          setValueFrom={setAgeFrom}
          valueTo={ageTo}
          setValueTo={setAgeTo}
          labelTo={'Age to'}
          labelFrom={'Age From'}
        />
        <Filter
          valueFrom={salaryFrom}
          setValueFrom={setSalaryFrom}
          valueTo={salaryTo}
          setValueTo={setSalaryTo}
          labelTo={'Salary to'}
          labelFrom={'Salary From'}
        />
      </View>
    </View>
  )
}

export default Search
