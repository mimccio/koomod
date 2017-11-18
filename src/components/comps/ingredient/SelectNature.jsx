// @flow
import React from 'react'
import styled from 'styled-components'
import facepaint from 'facepaint'
import palette from '../../../style/palette'

const mq = facepaint(['@media(min-width: 360px)', '@media(min-width: 420px)', '@media(min-width: 820px)'])

const Select = styled.select`
  display: inline;

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
  ${mq({
    width: ['60px', '70px', '80px', '90px'],
  })};

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
  value: 'g' | 'kg' | 'ml' | 'l' | 'item' | 'box',
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
