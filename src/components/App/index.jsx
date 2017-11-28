import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// global styles
import '../../style/css/reset.css'
import '../../style/css/normalize.css'
import '../../style/css/box-sizing.css'
// eslint-disable-next-line
import globalStyles from '../../style/globalStyle'

import { GC_AUTH_TOKEN } from '../../lib/constants'
import Routes from '../views'
import Topbar from '../comps/Topbar'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/koomod',
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
      <div>
        <Topbar />
        <Routes />
      </div>
    </ApolloProvider>
  </Router>
)
