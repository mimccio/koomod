// @flow
/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: green;
  border: 2px solid red;
  padding: 1rem;
`

const Toggle = styled.input`
  display: none;

  & + label {
    cursor: pointer;
    margin-left: 0.5rem;
    width: 2.5rem;
    height: 1rem;
    border: 2px solid pink;
    border-radius: 0.25rem;
  }

  & + label:hover {
    box-shadow: 0 2px 4px -1px currentColor;
    transition: box-shadow 0.2s;
  }
  & + label::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    background: currentColor;
    display: block;
    transform: translate3d(0.125rem, 0.125rem, 0);
    border-radius: 0.125rem;
    transition: all 0.2s;
  }
  &:checked + label {
    background: currentColor;
    color: inherit;
  }
  &:checked + label::before {
    background: white;
    transform: translate3d(1.625rem, 0.125rem, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    content: '✔';
  }
  & + label + .Emoji {
    margin-left: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:checked + label + .Emoji {
    opacity: 1;
  }
`

export default ({ recipeId }: { recipeId: string }) => (
  <Wrapper>
    <form>
      <Toggle type="checkbox" id={`toggle${recipeId}`} />
      <label htmlFor={`toggle${recipeId}`} />
      <span className="Emoji">✔</span>
    </form>
  </Wrapper>
)
