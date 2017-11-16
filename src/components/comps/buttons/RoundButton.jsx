// @flow
import styled from 'styled-components'

const RoundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: visible;
  margin: 3px;
  text-rendering: optimizeLegibility;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50%;
  padding: 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0);
  transition: all 0.5s ease;
  transform: scale(1);

  i {
    font-size: 22px;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;
    box-shadow: none;
    transform: scale(1.1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-content;
    content: '';
    width: 100%;
    height: 100%;
    border: solid 2px;
    border-color: transparent;
    transform: scale(0.7);
    transition: transform 0.2s ease;
    border-radius: 50%;
  }

  &:hover::after {
    transform: scale(1);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.4), 1px 3px 12px rgba(0, 0, 0, 0.3);
  }

  &:active:after {
    transform: scale(1.1);
  }

  @media (min-width: 641px) {
    margin: 5px;
    width: 50px;
    height: 50px;

    i {
      font-size: 24px;
    }
  }

  @media (min-width: 881px) {
    margin: 8px;
    font-size: 5px;
    width: 60px;
    height: 60px;

    &:after {
      border-width: 3px;
    }

    i {
      font-size: 26px;
    }
  }
`

export default RoundButton
