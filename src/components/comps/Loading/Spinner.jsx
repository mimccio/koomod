// @flow
import React from 'react'
import styled, { keyframes } from 'styled-components'

const cubemove = keyframes`
25% { 
  transform: translateX(60px) rotate(-90deg) scale(0.4);
} 50% { 
  transform: translateX(60px) translateY(60px) rotate(-179deg);
} 50.1% { 
  transform: translateX(60px) translateY(60px) rotate(-180deg);
} 75% { 
  transform: translateX(0px) translateY(60px) rotate(-270deg) scale(0.4);
} 100% { 
  transform: rotate(-360deg);
}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = styled.div`
  margin: 100px auto;
  width: 80px;
  height: 80px;
  position: relative;
`

const Cube = styled.div`
  background-color: #ba68c8;
  border-radius: 25%;
  width: 14px;
  height: 16px;
  position: absolute;
  bottom: 0;
  top: 0;

  animation: ${cubemove} 2s infinite ease-in-out;
`

const Cube1 = styled(Cube)``
const Cube2 = styled(Cube)`
  animation-delay: -0.5s;
  width: 16px;
  height: 14px;
`
const Cube3 = styled(Cube)`animation-delay: -1s;`
const Cube4 = styled(Cube)`
  animation-delay: -1.5s;
  width: 16px;
  height: 14px;
`

export default () => (
  <Wrapper>
    <Spinner>
      <Cube1 />
      <Cube2 />
      <Cube3 />
      <Cube4 />
    </Spinner>
  </Wrapper>
)
