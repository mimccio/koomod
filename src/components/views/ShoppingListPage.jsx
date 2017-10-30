// @flow
import React from 'react'
import { Spinner, EmptyList } from '../comps/loading'

export default () => <EmptyList message='loading recipes...' spinner={<Spinner />} />
