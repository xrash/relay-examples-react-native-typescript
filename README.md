# relay-examples-react-native-typescript

This is a collection of examples on how to use [relay](https://github.com/facebook/relay) with React Native, Expo and TypeScript.

Because we need a relay-compliant GraphQL server to practice, examples integrate with GitHub's GraphQL API.

# How to run

First, you need to grab a Personal Access Token from your GitHub account. To generate a token, go [here](https://github.com/settings/tokens/new). **You need to select at least the _repo_ scope.**

With your token in hand, clone this repo, then copy `.env.example` to `.env`, and set the environment variable `GITHUB_AUTH_TOKEN` to your token, like this:

```
# .env
GITHUB_AUTH_TOKEN=ghp_mytokenhere
```

Now, you can run `yarn` to install dependencies and `yarn start` to run the app. The app will be accessible at `localhost:19006`.

# Adding TS support to relay

Step-by-step on how to add TS support to relay:

1. Add TS types for package `react-relay`:

```bash
$ yarn add --dev @types/react-relay
```

2. Create a single `./src/__generated__` dir (`relay-compiler` expects this directory to already exists and won't create it):

```bash
$ mkdir src/__generated__
```

3. Configure `relay-compiler` to use that single directory:

```bash
$ relay-compiler --src ./src --schema ./schema.graphql --artifactDirectory ./src/__generated__
```

4. Follow TypeScript definitions of relay environment setup under `./src/relay-stuff`

5. Import types in your queries like in `./src/examples/Example0/MyRepos/MyRepos.tsx`:

```typescript
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

// ....

const data = useLazyLoadQuery<MyReposQuery>(
  MyReposQueryVar,
  { login: 'xrash' },
)

```
