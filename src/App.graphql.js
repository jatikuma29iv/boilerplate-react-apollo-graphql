import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  //uri: `${API_BASE_URL}/graphql`,
  uri: '/graphql',
  cache: new InMemoryCache()
})

export default client
