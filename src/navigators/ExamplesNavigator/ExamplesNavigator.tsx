import { createStackNavigator } from '@react-navigation/stack'
import { FC } from 'react'
import { Platform } from 'react-native'
import { Example0 } from '~/examples/Example0'
import { ParamList } from './navigation'

const Stack = createStackNavigator<ParamList>()

export const ExamplesNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="summary"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="example0" component={Example0} />
    </Stack.Navigator>
  )
}
