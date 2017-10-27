// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../comps/layouts'

export default () => (
  <PageLayout>
    <p>Home</p>
    <Link to='/recipes'>recipes</Link>
  </PageLayout>
)
