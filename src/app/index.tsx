import useGetRequest from '@/hooks/useGetRequest'
import { useRouter } from 'expo-router'
import React, { useMemo, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Search from '../components/search'
import { SafeAreaView } from 'react-native'
import FloatingButton from '../components/floatingButton'
import SwipeableCard from '@/components/swipeableCard'

const Index = () => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    ageFrom: '',
    ageTo: '',
    salaryFrom: '',
    salaryTo: '',
  })

  const {
    data: employeesData,
    isLoading: isEmployeesDataLoading,
    refetch,
    isFetching,
  } = useGetRequest(`/v1/employees`, `employees`)

  const filteredEmployees = useMemo(() => {
    if (!employeesData) return []
    return employeesData.filter((employee) => {
      const matchesName = employee.employee_name
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase())
      const matchesAge =
        (!filters.ageFrom || employee.employee_age >= parseInt(filters.ageFrom, 10)) &&
        (!filters.ageTo || employee.employee_age <= parseInt(filters.ageTo, 10))
      const matchesSalary =
        (!filters.salaryFrom || employee.employee_salary >= parseInt(filters.salaryFrom, 10)) &&
        (!filters.salaryTo || employee.employee_salary <= parseInt(filters.salaryTo, 10))
      return matchesName && matchesAge && matchesSalary
    })
  }, [employeesData, filters])

  if (isEmployeesDataLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  return (
    <SafeAreaView className='flex-1 '>
      <View className='flex-1 p-5 flex-col h-full box-border'>
        <Search onFilter={setFilters} />

        <FlatList
          className='mt-2'
          data={filteredEmployees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SwipeableCard item={item} />}
          refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
        />
      </View>
      <FloatingButton />
    </SafeAreaView>
  )
}

export default Index
