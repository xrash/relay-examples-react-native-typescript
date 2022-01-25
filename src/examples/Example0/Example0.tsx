import { Suspense } from 'react'
import { StyleSheet, View } from 'react-native'
import { ErrorBoundary } from '~/components/ErrorBoundary'
import { MyRepos } from './MyRepos'

export const Example0 = () => {
  return (
    <View style={styles.container}>
      <ErrorBoundary message={'Error loading repos.'}>
        <Suspense fallback={'Loading repos...'}>
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
