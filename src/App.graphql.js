import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  //uri: `${API_BASE_URL}/graphql`,
  uri: 'http://localhost:3100/graphql',
  cache: new InMemoryCache()
})

export default client
