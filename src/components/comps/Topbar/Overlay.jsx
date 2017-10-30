// @flow
import React from 'react'
import styled from 'styled-components'

import { topbarHeight } from '../../../style/config'

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: ${topbarHeight};
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  visibility: ${({ menuIsOpen }: { menuIsOpen: boolean }) => (menuIsOpen ? 'visible ' : 'hidden')};
  background-color: ${({ menuIsOpen }: { menuIsOpen: boolean }) =>
    (menuIsOpen ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)')};
  transition: all 300ms ease;
`

const closeMenu = (menuIsOpen, toggleMenu) => {
  if (menuIsOpen) {
    toggleMenu()
  }
}

export default ({ menuIsOpen, toggleMenu }: { menuIsOpen: boolean, toggleMenu: Function }) => (
  <Overlay menuIsOpen={menuIsOpen} onClick={() => closeMenu(menuIsOpen, toggleMenu)} />
)
