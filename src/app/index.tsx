import useGetRequest from '@/hooks/useGetRequest'
import { Link, useRouter } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Search from './components/search'
import { SafeAreaView } from 'react-native'

const Index = () => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    ageFrom: '',
    ageTo: '',
    salaryFrom: '',
    salaryTo: '',
  })

  const router = useRouter()

  const { data: employeesData, isLoading: isEmployeesDataLoading } = useGetRequest(
    `/v1/employees`,
    `employees`
  )

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

  // const filteredEmployees = useMemo(() => {
  //   if (!employeesData) return []
  //   return employeesData.filter((employee) =>
  //     employee.employee_name.toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  // }, [employeesData, searchQuery])

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
          renderItem={({ item }) => (
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
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Index

function Content() {
  return (
    <View className='flex-1'>
      <View className='py-12 md:py-24 lg:py-32 xl:py-48'>
        <View className='px-4 md:px-6'>
          <View className='flex flex-col items-center gap-4 text-center'>
            <Text
              role='heading'
              className='text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
            >
              Welcome to Project ACME
            </Text>
            <Text className='mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400'>
              Discover and collaborate on amce. Explore our services now.
            </Text>

            <View className='gap-4'>
              <Link
                suppressHighlighting
                className='flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='/'
              >
                Explore
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

function Header() {
  const { top } = useSafeAreaInsets()
  return (
    <View style={{ paddingTop: top }}>
      <View className='px-4 lg:px-6 h-14 flex items-center flex-row justify-between '>
        <Link className='font-bold flex-1 items-center justify-center' href='/'>
          ACME
        </Link>
        <View className='flex flex-row gap-4 sm:gap-6'>
          <Link className='text-md font-medium hover:underline web:underline-offset-4' href='/'>
            About
          </Link>
          <Link className='text-md font-medium hover:underline web:underline-offset-4' href='/'>
            Product
          </Link>
          <Link className='text-md font-medium hover:underline web:underline-offset-4' href='/'>
            Pricing
          </Link>
        </View>
      </View>
    </View>
  )
}

function Footer() {
  const { bottom } = useSafeAreaInsets()
  return (
    <View className='flex shrink-0 bg-gray-100 native:hidden' style={{ paddingBottom: bottom }}>
      <View className='py-6 flex-1 items-start px-4 md:px-6 '>
        <Text className={'text-center text-gray-700'}>© {new Date().getFullYear()} Me</Text>
      </View>
    </View>
  )
}
