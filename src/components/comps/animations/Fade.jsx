import React from 'react'
import { Transition } from 'react-transition-group'

export default ({ children, ...props }) => (
  <Transition
    exit
    appear
    {...props}
    timeout={{
      enter: 150,
      exit: 150,
    }}
  >
    {status => children(status)}
  </Transition>
)
