import { FetchFunction } from 'relay-runtime'
import Constants from 'expo-constants'

// eslint-disable-next-line no-unused-vars
const w8 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 1000)
  })
}

const fetchGraphQL = async (params: Parameters<FetchFunction>[0], variables: Parameters<FetchFunction>[1]) => {
  // @ts-ignore
  const GITHUB_AUTH_TOKEN = Constants.manifest.extra.GITHUB_AUTH_TOKEN;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  // Enable this if you want to artificially
  // wait 1s to resolve every request. This is
  // useful when testing loading/suspense.
  // await w8()

  const body = await response.json()

  return body
}

export default fetchGraphQL;

