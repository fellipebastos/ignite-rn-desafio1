/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home'
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar translucent />
      <Home />
    </>
  )
}
