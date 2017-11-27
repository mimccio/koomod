// @flow
import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

import { PageWrapper } from '../comps/layouts'
import palette from '../../style/palette'
// import { fontSize } from '../../style/config'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 0;
`

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`

const Footer = styled.section`
  padding: 20px;
`

const Link = styled.a`
  color: ${({ color }) => color};
  transition: color 400ms ease;
  &:hover {
    color: ${palette.textSecondary};
  }
`

export default () => (
  <PageWrapper>
    <Wrapper>
      <ContentWrapper>
        <Section>
          <p>
            The backend is provided for free by the awesome team of{' '}
            <Link color='#27ae60' href='https://www.graph.cool' target='_blank' rel='noopener noreferrer'>
              graph.cool
            </Link>
          </p>
        </Section>
        <Section>
          <p>
            The logo is made by{' '}
            <Link
              color={palette.grey.dark}
              href='https://www.flaticon.com/authors/those-icons'
              target='_blank'
              rel='noopener noreferrer'
              title='Those Icons'
            >
              Those Icons
            </Link>{' '}
            from{' '}
            <Link
              color={palette.grey.dark}
              href='https://www.flaticon.com/'
              title='Flaticon'
              target='_blank'
              rel='noopener noreferrer'
            >
              www.flaticon.com
            </Link>{' '}
            is licensed by{' '}
            <Link
              color={palette.grey.dark}
              href='http://creativecommons.org/licenses/by/3.0/'
              title='Creative Commons BY 3.0'
              target='_blank'
              rel='noopener noreferrer'
            >
              CC 3.0 BY
            </Link>
          </p>
        </Section>
      </ContentWrapper>
      <Footer>
        <a href='https://www.graph.cool' target='_blank' rel='noopener noreferrer'>
          <img src='https://www.graph.cool/static/media/badge.10d1f6dd.svg' alt='Backen by graphcool' />
        </a>
      </Footer>
    </Wrapper>
  </PageWrapper>
)
