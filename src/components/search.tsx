import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Filter from './filter'
import SearchBar from './searchBar'

const Search = (props) => {
  const { onFilter } = props

  const [searchQuery, setSearchQuery] = useState('')
  const [ageFrom, setAgeFrom] = useState('')
  const [ageTo, setAgeTo] = useState('')
  const [salaryFrom, setSalaryFrom] = useState('')
  const [salaryTo, setSalaryTo] = useState('')

  useEffect(() => {
    const handleApplyFilters = () => {
      onFilter({ searchQuery, ageFrom, ageTo, salaryFrom, salaryTo })
    }
    handleApplyFilters()
  }, [ageFrom, ageTo, salaryFrom, salaryTo, searchQuery])

  return (
    <View className='flex justify-end items-end box-border  w-full mb-5 gap-y-4'>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View className='flex flex-col gap-y-2 -mt-2'>
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
