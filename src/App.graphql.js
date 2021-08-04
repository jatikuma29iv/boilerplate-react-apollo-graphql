import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'

// simple configuration
/*
const client = new ApolloClient({
  //uri: `${API_BASE_URL}/graphql`,
  uri: '/graphql',
  cache: new InMemoryCache()
})
*/

import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import UserService from './services/UserService'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = UserService.getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
