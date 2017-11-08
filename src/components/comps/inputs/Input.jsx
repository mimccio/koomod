// @flow
import styled from 'styled-components'

import palette from '../../../style/palette'
import { fontSize } from '../../../style/config'

const Input = styled.input`
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
  color: ${palette.text};
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

export default Input
