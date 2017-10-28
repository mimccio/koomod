import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import MenuToggler from '../../containers/MenuToggler'
import Menu from './Menu'
import LeftIcon from './LeftIcon'
import RightIcon from './RightIcon'
import Title from './Title'

import { topbarHeight } from '../../../style/config'
import palette from '../../../style/palette'

const Bar = styled.div`
  background-color: ${palette.primary.main};
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
          <LeftIcon menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
          <Title location={location} />
          <RightIcon location={location} />
        </Bar>

        <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} history={history} location={location} />
      </div>
    )}
  </MenuToggler>
))
