// @flow
import * as React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'

const ItemWrapper = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${palette.divider};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ isDone }) => (isDone ? palette.disabled : palette.text)};
  font-style: ${({ isDone }) => (isDone ? 'italic' : 'normal')};
  text-decoration: ${({ isDone }) => (isDone ? `line-through ${palette.disabled}` : 'none')};
  cursor: pointer;
  // transition: all 200 ms ease;
`

type Props = {
  ingredient: {
    name: string,
    quantity: number,
    nature: string
  }
}

type State = {
  isDone: boolean
}

export default class ShoppingListItem extends React.Component<Props, State> {
  state = {
    isDone: false,
  }
  render() {
    const { name, quantity, nature } = this.props.ingredient
    return (
      <ItemWrapper isDone={this.state.isDone} onClick={() => this.setState({ isDone: !this.state.isDone })}>
        <p>{name}</p>

        <p>
          {quantity} {nature}
        </p>
      </ItemWrapper>
    )
  }
}
