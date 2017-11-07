// @flow
import React from 'react'
import styled from 'styled-components'
import palette from '../../../style/palette'

const Select = styled.select`
  display: inline;
  width: 80px;
  height: 34px;
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: black;
  transition: color 0.3s ease;
  padding-left: 10px;
  box-sizing: border-box;

  &:hover {
    color: ${palette.primary.main};
  }

  &:focus {
    margin: 0;
    appearance: menulist;
    padding: 5px;
    border: 1px solid ${palette.primary.light};
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.4);
    outline-color: transparent;
    outline-style: none;
  }
`

export default ({ value, onChange }: { value: 'g' | 'kg' | 'ml' | 'l' | 'item', onChange: Function }) => (
  <div>
    <Select name='nature' value={value} onChange={onChange} id='nature'>
      <option value='g'>g</option>
      <option value='kg'>kg</option>
      <option value='ml'>ml</option>
      <option value='l'>l</option>
    </Select>
  </div>
)
