import React from 'react'
import styled from 'styled-components'

import { FadeTransition, FadeComp } from '../animations/Fade'
import palette from '../../../style/palette'
// import { fontSize } from '../../../style/config'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;


}
`

const QuestionWtapper = styled.div`
  transition: all 2000ms ease;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // border: 2px solid blue;
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? palette.textSecondary : 'white')};

  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  background-color: ${({ isOpen }) => (isOpen ? palette.grey.light : palette.danger.light)};
  &:hover {
    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
  }
`

const ConfirmWrapper = styled(FadeComp)`
  transition: all 300ms ease-in-out;
  transform-origin: right;
  width: 80px;
  height: 44px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.danger.light};
  color: white;
  cursor: pointer;
`

export default class DeleteRecipe extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    return (
      <Wrapper>
        <QuestionWtapper isOpen={this.state.isOpen} onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          {this.state.isOpen ? (
            <i className='material-icons'>cancel</i>
          ) : (
            <i className='material-icons'>delete_forever</i>
          )}
        </QuestionWtapper>
        <FadeTransition in={this.state.isOpen} enter={0}>
          {status => (
            <ConfirmWrapper id='delete-recie' status={status}>
              confirm
            </ConfirmWrapper>
          )}
        </FadeTransition>
      </Wrapper>
    )
  }
}
