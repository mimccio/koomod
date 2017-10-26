import React from 'react'

export default class ToggleMenu extends React.Component {
  state = {
    menuIsOpen: false,
  }

  toggleMenu = () => {
    this.setState(({ menuIsOpen }) => ({ menuIsOpen: !menuIsOpen }))
  }

  render() {
    const data = { menuIsOpen: this.state.menuIsOpen, toggleMenu: this.toggleMenu }
    return this.props.children(data)
  }
}
