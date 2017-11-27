import React from 'react'
import styled from 'styled-components'

import { FadeTransition, FadeComp } from '../animations/Fade'
import palette from '../../../style/palette'
import { fontSize } from '../../../style/config'
import DeleteRecipe from '../../containers/DeleteRecipe'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
}
`

const QuestionWtapper = styled.div`
  transition: all 300ms ease;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px solid blue;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ isOpen }) => (isOpen ? palette.grey.main : palette.danger.light)};

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
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.danger.light};
  color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 5px 8px 12px rgba(0, 0, 0, 0.3);
  }
`

const IconWrapper = styled(FadeComp)`
transition: all 150ms ease-in-out;
//transform-origin: right;
position: absolute;
color: white;
display: flex;
  justify-content: center;
  align-items: center;
i {
    color: 'white';
    font-size: ${fontSize.bodyHuge}
  }
/* width: 80px;
height: 44px;
border-radius: 5px;
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
display: flex;
justify-content: center;
align-items: center;
background-color: ${palette.danger.light};
color: white;
cursor: pointer; */
`

const Title = styled.div`
  color: ${palette.primary.light};
  font-style: italic;
  padding-bottom: 8px;
  font-size: ${fontSize.bodySmall};
  width: 100%;
  padding-bottom: 14px;
`

export default class DeleteRecipeBtn extends React.Component {
  state = {
    isOpen: false,
  }

  // handleBlur = (evt) => {
  //   console.log('blur', evt.relatedTarget)
  //   let newIsOpen = false
  //   if (evt.relatedTarget && evt.relatedTarget.is === 'confirm-delete-recipe') {
  //     newIsOpen = true
  //   }
  //   this.setState({ isOpen: newIsOpen })

  //   return 'blur'
  // }

  handleBlur = (evt) => {
    evt.stopPropagation()
    if (
      !evt.relatedTarget ||
      (evt.relatedTarget.id !== 'confirm-delete-recipe' && evt.relatedTarget.id !== 'delete-recipe-question')
    ) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <Wrapper onBlur={evt => this.handleBlur(evt)}>
        <Title>delete recipe</Title>
        <QuestionWtapper
          id='delete-recipe-question'
          tabIndex='0'
          isOpen={this.state.isOpen}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <FadeTransition in={this.state.isOpen} appear={false} enter={150}>
            {status => (
              <IconWrapper status={status}>
                <i className='material-icons'>cancel</i>
              </IconWrapper>
            )}
          </FadeTransition>

          <FadeTransition in={!this.state.isOpen} enter={150}>
            {status => (
              <IconWrapper status={status}>
                <i className='material-icons'>delete_forever</i>
              </IconWrapper>
            )}
          </FadeTransition>

          {/* {this.state.isOpen ? (
            <i className='material-icons'>cancel</i>
          ) : (
            <i className='material-icons'>delete_forever</i>
          )} */}
        </QuestionWtapper>
        <DeleteRecipe recipeId={this.props.recipeId} ingredients={this.props.ingredients} >
          {deleteRecipe => (
            <FadeTransition in={this.state.isOpen} enter={0}>
              {status => (
                <ConfirmWrapper onClick={deleteRecipe} tabIndex='0' id='confirm-delete-recipe' status={status}>
                  confirm
                </ConfirmWrapper>
              )}
            </FadeTransition>
          )}
        </DeleteRecipe>
      </Wrapper>
    )
  }
}
