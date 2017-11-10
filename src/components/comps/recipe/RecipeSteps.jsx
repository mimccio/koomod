import React from 'react'
import styled from 'styled-components'
import palette from '../../../style/palette'
import { ListWrapper } from '../layouts'

const Wrapper = styled.div`
  min-height: calc(100vh - 104px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  border: none;
  background-color: ${palette.grey.lighter};
`
const ContentWrapper = styled.div`
  background-color: ${palette.grey.lighter};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 460px;
  padding-bottom: 20px;
  flex: 1;
  border: none;
`

const StepItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.text}
  padding: 14px;
  width: 100%;
  height: 100%;
`

const ComingSoon = styled.div`
  padding: 14px;
  color: ${palette.primary.light};
  font-style: italic;
`

export default ({ steps }) => (
  <Wrapper>
    <ContentWrapper>
      <ComingSoon>Comming soon</ComingSoon>
      <ListWrapper>{steps.map(step => <StepItemWrapper key={step.id}>{step.text}</StepItemWrapper>)}</ListWrapper>
    </ContentWrapper>
  </Wrapper>
)
