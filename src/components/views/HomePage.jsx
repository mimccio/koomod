// @flow
import React from 'react'

import { PageLayout } from '../comps/layouts'
import { Topbar } from '../comps/nav'

export default () => (
  <PageLayout topbar={<Topbar rightIconName='restaurant_menu' to='/recipes' />}>
    <p>Home</p>
  </PageLayout>
)
