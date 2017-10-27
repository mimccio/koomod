import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import { TransitionGroup } from 'react-transition-group'
// import { Fade } from '../animations'

import MenuToggler from '../../containers/MenuToggler'
import Menu from './Menu'
import leftIcon from './leftIcon'
import RightIcon from './RightIcon'
import BarTitle from './BarTitle'
// import { RightBarIcon } from './BarIcon'
import { topbarHeight } from '../../../style/config'

const Bar = styled.div`
  background-color: #8e24aa;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: top;
  height: ${topbarHeight};
  font-weight: normal;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  color: white;
`

export default withRouter(({ location, history }) => (
  <MenuToggler>
    {({ menuIsOpen, toggleMenu }) => (
      <div>
        <Bar>
          <TransitionGroup>{leftIcon(menuIsOpen, toggleMenu)}</TransitionGroup>
          <BarTitle location={location} history={history} />
          <RightIcon location={location} />
        </Bar>

        <Menu menuIsOpen={menuIsOpen} />
      </div>
    )}
  </MenuToggler>
))
