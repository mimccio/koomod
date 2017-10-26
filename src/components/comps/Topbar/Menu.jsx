import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

const Slider = styled.div`
  // display: flex;
  // align-self: self-start;
  position: fixed;
  //z-index: 10;
  //margin-top: 50px;
  height: 100%;
  width: 260px;
  background-color: #eee;
  padding: 60px 10px 20px 20px;
  transition: all 300ms ease-in-out;
  visibility: ${(props) => {
    if (props.status === 'entering') {
      return 'hidden'
    }
    if (props.status === 'entered') {
      return 'visible'
    }
    return 'hidden'
  }};

  transform: translate3d(
    ${(props) => {
    if (props.status === 'entering') {
      return '-100%'
    }
    if (props.status === 'entered') {
      return 0
    }
    return '-100%'
  }},
    0,
    0
  );
`

export default ({ menuIsOpen }) => (
  <div onBlur={() => console.log('blur')}>
    <Transition in={menuIsOpen} timeout={0}>
      {status => <Slider status={status}>hello msh gseiy gesih gesorhgoiseh gosleihoiesh mohrse</Slider>}
    </Transition>
  </div>
)
