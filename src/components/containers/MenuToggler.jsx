// @flow
import * as React from 'react'

type Props = {
  children: (data: { menuIsOpen: boolean, toggleMenu: Function }) => React.Node
}

type State = {
  menuIsOpen: boolean
}

export default class ToggleMenu extends React.Component<Props, State> {
  state = {
    menuIsOpen: false,
  }

  toggleMenu = (): void => {
    this.setState(({ menuIsOpen }) => ({ menuIsOpen: !menuIsOpen }))
  }

  render() {
    const data = { menuIsOpen: this.state.menuIsOpen, toggleMenu: this.toggleMenu }
    return this.props.children(data)
  }
}
