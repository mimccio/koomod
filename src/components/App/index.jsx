import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

import { GC_AUTH_TOKEN } from '../../lib/constants'
import Routes from '../views'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/komi-apollo',
})

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }
      const token = localStorage.getItem(GC_AUTH_TOKEN)
      req.options.headers.authorization = token ? `Bearer ${token}` : null
      next()
    },
  },
])

const client = new ApolloClient({
  networkInterface,
})

export default () => (
  <Router>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Router>
)
