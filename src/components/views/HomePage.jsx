// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { PageWrapper } from '../comps/layouts'
import palette from '../../style/palette'
import { fontSize } from '../../style/config'

const footerHeight = '80px'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: calc(100% - ${footerHeight});
  padding-bottom: 40px;
`

const LoginBtn = styled(Link)`
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  //margin-top: 50px;
  outline: none;
  cursor: pointer;
  background-color: ${palette.primary.main};
  color: white;
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.25);
  border: 2px solid transparent;
  &:hover {
    box-shadow: 3px 6px 8px rgba(0, 0, 0, 0.4);
  }
  &:focus {
    border: 2px solid ${palette.primary.dark};
    box-shadow: 3px 6px 8px rgba(0, 0, 0, 0.4);
  }
`

const Step = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 20px;
  i {
    font-size: ${fontSize.bodyBig};
    color: white;
  }
`

const Footer = styled.section`
  //background-color: ${palette.primary.light};
  font-size: ${fontSize.bodyTiny};
  display: flex;
  justify-content: center;
  padding: 14px;
  width: 100%;
  height: ${footerHeight};
  color: white;
  color: ${palette.textSecondary};
  border-top: 2px solid ${palette.grey.light};
`

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
`

const FooterContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  //width: 300px;

  a {
    transition: color 400ms ease;
    &:hover {
      color: ${palette.text};
    }
  }
`

const FooterInfo = styled.p`
  padding: 2px;
`

export default () => (
  <PageWrapper>
    <Wrapper>
      <ContentWrapper>
        <section>
          <Step>
            <IconWrapper color={palette.info.accent.main}>
              <i className='material-icons'>restaurant_menu</i>
            </IconWrapper>
            <p>Create your recipes</p>
          </Step>
          <Step>
            <IconWrapper color={palette.sexy.accent.main}>
              <i className='material-icons'>add_shopping_cart</i>
            </IconWrapper>
            <p>Select the recipes you want to shop for</p>
          </Step>
          <Step>
            <IconWrapper color={palette.success.accent.main}>
              <i className='material-icons'>shopping_cart</i>
            </IconWrapper>
            <p>Use your shopping list</p>
          </Step>
        </section>
        <LoginBtn to='/login'>login</LoginBtn>
      </ContentWrapper>
      <Footer>
        <FooterWrapper>
          <FooterContent>
            <FooterInfo>
              <Link to='/credits'>Credits</Link>
            </FooterInfo>
            <FooterInfo>
              <Link to='/tos'>Terms of Service</Link>
            </FooterInfo>
            <FooterInfo>
              <a href='mailto:support@komi.recipes'>Support</a>
            </FooterInfo>
            <FooterInfo>© 2017-2018 Michael Maccio</FooterInfo>
          </FooterContent>
          <a href='https://www.graph.cool' target='_blank' rel='noopener noreferrer'>
            <img src='https://www.graph.cool/static/media/badge.10d1f6dd.svg' alt='Backen by graphcool' />
          </a>
        </FooterWrapper>
      </Footer>
    </Wrapper>
  </PageWrapper>
)
