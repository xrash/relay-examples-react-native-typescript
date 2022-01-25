import { FC } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import MyEnvironment from '~/relay-stuff/MyEnvironment'
import { NavigationContainer } from '@react-navigation/native'
import { ExamplesNavigator } from '~/navigators/ExamplesNavigator'

export const Entrypoint: FC = () => {
  return (
    <RelayEnvironmentProvider environment={MyEnvironment}>
      <NavigationContainer>
        <ExamplesNavigator />
      </NavigationContainer>
    </RelayEnvironmentProvider>
  )
}
