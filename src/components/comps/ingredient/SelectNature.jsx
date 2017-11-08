// @flow
import React from 'react'
import styled from 'styled-components'
import palette from '../../../style/palette'

const Select = styled.select`
  display: inline;
  width: 80px;
  height: 36px;
  appearance: none;
  border: none;
  border-bottom: 1px solid ${palette.primary.lighter};
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s ease;
  //padding-left: 6px;
  box-sizing: border-box;
  color: ${palette.text};
  appearance: menulist;
  padding: 5px;

  &:focus {
    margin: 0;
    appearance: menulist;
    //padding-left: -6px;
    border-bottom: 1px solid ${palette.primary.light};
    //box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
    outline-color: transparent;
    outline-style: none;
  }
`

export default ({
  value,
  onChange,
  isPlural,
}: {
  value: 'g' | 'kg' | 'ml' | 'l' | 'item',
  onChange: Function,
  isPlural: boolean
}) => (
  <div>
    <Select name='nature' value={value} onChange={onChange} id='nature'>
      <option value='g'>g</option>
      <option value='kg'>kg</option>
      <option value='ml'>ml</option>
      <option value='l'>l</option>
      <option value='item'>{isPlural ? 'items' : 'item'}</option>
      <option value='box'>{isPlural ? 'boxes' : 'box'}</option>
    </Select>
  </div>
)
