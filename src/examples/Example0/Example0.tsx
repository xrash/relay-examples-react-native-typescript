import { Suspense } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ErrorBoundary } from '~/components/ErrorBoundary'
import { MyRepos } from './MyRepos'

export const Example0 = () => {
  return (
    <View style={styles.container}>
      <ErrorBoundary message={'Error loading repos.'}>
        <Suspense fallback={<Text>{'Loading repos...'}</Text>}>
          <MyRepos />
        </Suspense>
      </ErrorBoundary>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
})
