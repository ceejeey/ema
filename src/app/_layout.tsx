import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../global.css'
import { Stack } from 'expo-router'

const queryClient = new QueryClient()

const StackLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: true, title: 'Employee List' }} />
        <Stack.Screen name='details' options={{ headerShown: true, title: 'Employee Details' }} />
      </Stack>
    </QueryClientProvider>
  )
}

export default StackLayout
