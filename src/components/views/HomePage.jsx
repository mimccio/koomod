// @flow
import React from 'react'

import { GC_USER_ID } from '../../lib/constants'
import { PageLayout } from '../comps/layouts'
import { Topbar } from '../comps/nav'

export default () => {
  const userId = localStorage.getItem(GC_USER_ID)
  return (
    <PageLayout topbar={<Topbar to='/recipes' rightIconName={userId ? 'restaurant_menu' : 'restaurant_menu'} />}>
      <p>Home</p>
    </PageLayout>
  )
}
