import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='[id]' options={{ headerShown: false }} />
    </Stack>
  )
}

export default StackLayout
