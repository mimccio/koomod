// @flow
import * as React from 'react'
import styled from 'styled-components'

import palette from '../../../style/palette'
import { fontSize } from '../../../style/config'
import { FadeTransition, FadeComp } from '../animations/Fade'

export const InputStyle = styled.input`
  background-color: ${palette.primary.lighter};
  width: 120px;
  border: none;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  padding: 6px;
  align-items: center;
  border-bottom: 1px solid ${palette.primary.lighter};
  background-color: transparent;
  transition: all 200ms ease;
  color: ${({ isOptimistic }) => (isOptimistic ? palette.textSecondary : palette.text)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::placeholder {
    color: ${palette.textSecondary};
    font-style: italic;
    font-size: ${fontSize.bodySmall};
    padding-left: 6px;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${palette.primary.light};
  }
`

const Label = styled.div`
  color: ${palette.primary.light};
  font-style: italic;
  padding-bottom: 8px;
  font-size: ${fontSize.bodySmall};
`

const Form = styled.form`
  padding-bottom: 20px;
  width: 100%;
  max-width: 240px;
`

const SaveButton = styled(FadeComp)`
  transition: all 300ms ease-in-out;
  transform-origin: right;
  color: ${palette.success.main};
  cursor: pointer;
  transition: all 200ms ease;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${palette.success.light};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${palette.primary.light};
  }
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type PropsType = {
  id: string,
  val: string | number,
  type: string,
  placeholder?: string,
  update: Function,
  label?: string,
  isOptimistic?: boolean,
  maxNumber: number
}

type StateType = {
  value: string | number,
  edit: boolean
}

export default class Input extends React.Component<PropsType, StateType> {
  static defaultProps = {
    maxNumber: 99999,
  }

  state = {
    value: this.props.val,
    edit: false,
  }

  saveChange = () => {
    const newValue = this.state.value
    if (newValue !== this.props.val) {
      const data = { value: newValue, select: this.props.id }
      this.props.update(data)
    }
  }

  handleKeyDown = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    if (evt.keyCode === 27) {
      evt.target.blur()
      this.setState({ value: this.props.val })
    }
    if (evt.keyCode === 13) {
      evt.persist()
      this.saveChange()
      this.setState({ edit: false }, () => evt.target.blur())
    }
  }

  handleSave = () => {
    this.saveChange()
    this.setState({ edit: false })
  }

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    if (typeof Number(evt.target.value) === 'number') {
      const num = Number(evt.target.value)
      const maxedValue = num >= this.props.maxNumber ? this.props.maxNumber : evt.target.value
      this.setState({ value: maxedValue, edit: true })
    }

    this.setState({ value: evt.target.value, edit: true })
  }

  handleBlur = (evt: SyntheticEvent<HTMLInputElement>) => {
    evt.stopPropagation()
    if (evt.relatedTarget && evt.relatedTarget.id === 'save') {
      console.log('blur', evt.relatedTarget && evt.relatedTarget.id && evt.relatedTarget.id)
    } else {
      this.setState({ value: this.props.val, edit: false })
    }
  }

  defineStep = () => {
    let step = 1
    if (typeof Number(this.state.value) === 'number') {
      const num = Number(this.state.value)
      if (num > 100) {
        step = 10
      }
      if (num > 1000) {
        step = 100
      }
      if (num > 10000) {
        step = 1000
      }
    }
    return step
  }

  render() {
    const step = this.defineStep()
    return (
      <Form onBlur={evt => this.handleBlur(evt)}>
        {this.props.label && <Label htmlFor={this.props.id}>{this.props.label}</Label>}
        <Wrapper>
          <InputStyle
            isOptimistic={this.props.isOptimistic}
            id={this.props.id}
            value={this.state.value}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={evt => this.handleChange(evt)}
            onKeyDown={evt => this.handleKeyDown(evt)}
            tabIndex='0'
            maxlength={140}
            step={step}
            min='0'
            max={this.props.maxNumber}
          />
          <FadeTransition in={this.state.edit && !!this.state.value} enter={0}>
            {status => (
              <SaveButton
                id='save'
                status={status}
                onClick={() => this.handleSave()}
                tabIndex={0}
                onKeyDown={evt => this.handleKeyDown(evt)}
              >
                <i className='material-icons'>check</i>
              </SaveButton>
            )}
          </FadeTransition>
        </Wrapper>
      </Form>
    )
  }
}
