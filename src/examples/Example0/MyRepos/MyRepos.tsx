import {
  useLazyLoadQuery,
} from 'react-relay/hooks'
import { View, Text, StyleSheet } from 'react-native'
import { graphql } from 'react-relay'
import type { MyReposQuery } from '~/__generated__/MyReposQuery.graphql'

const MyReposQueryVar = graphql`
query MyReposQuery($login: String!) { 
  user(login: $login) {
    repositories(first: 16, orderBy: { field: CREATED_AT, direction: DESC }, ownerAffiliations: [OWNER]) {
      totalCount
      totalDiskUsage
      edges {
        cursor
        node {
          id
          name
          nameWithOwner
          diskUsage
        }
      }
    } 
  }
}
`

export const MyRepos = () => {
  const login = 'xrash'

  const data = useLazyLoadQuery<MyReposQuery>(
    MyReposQueryVar,
    { login },
  )

  if (!data.user) {
    return (
      <View>
        <Text>
          {`User ${login} not found`}
        </Text>
      </View>
    )
  }

  if (data.user.repositories.edges === null || data.user.repositories.edges.length === 0) {
    return (
      <View>
        <Text>
          {`User ${login} has no repos`}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.elements}>
        {data.user.repositories.edges.map(edge => (
          <View key={edge?.node?.name}>
            <Text>{edge?.node?.nameWithOwner}</Text>
          </View>
        ))}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  elements: {

  },
})
