// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'

import Login from '../containers/Login'
import { PageWrapper } from '../comps/layouts'
import { Input as InputStyle, Label } from '../comps/inputs/Form'
import palette from '../../style/palette'
import { fontSize } from '../../style/config'

type Data = {
  login: boolean,
  name: string,
  email: string,
  password: string,
  error: string,
  onChange: Function,
  signUp: string,
  confirm: Function
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 10px;
  width: 100%;
  max-width: 300px;
`

const FormWrapperValidation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LoginWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px 10px;
  width: 100%;
  max-width: 300px;
`

const FormWrapper = styled.div`padding: 10px;`

const ErrorWrapper = styled.div`
  padding-top: 20px;
  color: ${palette.danger.light};
  height: 30px;
`

const Validation = styled.div`
  padding: 10px;
  color: ${({ checked }) => (checked ? palette.success.light : palette.danger.light)};
  i {
    font-size: ${fontSize.body};
  }
`

const Input = styled(InputStyle)`width: 200px;`

const LoginBtn = styled.div`
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  margin-top: 20px;
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

const SignUpToggler = styled.div`
  transition: all 200ms ease-in-out;
  padding: 10px;
  margin-top: 50px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${palette.primary.light};
  }
`

export default ({ history, newUser }: { history?: {}, newUser?: boolean }) => (
  <Login history={history} newUser={newUser}>
    {(data: Data) => {
      const {
 email, name, password, error, onChange, confirm,
} = data

      const handleKeyDown = (evt) => {
        if (evt.keyCode === 27) {
          evt.target.blur()
        }
        if (evt.keyCode === 13) {
          if (evt.target.name === 'name') {
            evt.target.parentNode.parentNode.nextElementSibling.firstChild.nextElementSibling.firstChild.focus()
          }
          if (evt.target.name === 'email' && newUser) {
            evt.target.parentNode.parentNode.nextElementSibling.firstChild.nextElementSibling.firstChild.focus()
          }
          if (evt.target.name === 'email' && !newUser) {
            evt.target.parentNode.nextElementSibling.firstChild.nextElementSibling.focus()
          }
          if (evt.target.name === 'password' || evt.target.id === 'login') {
            confirm(evt)
          }
        }
      }

      return (
        <PageWrapper>
          <Wrapper>
            <ErrorWrapper>{error && <p>{error.replace('GraphQL error: ', '')}</p>}</ErrorWrapper>

            {newUser ? (
              <ContentWrapper>
                <FormWrapper>
                  <Label htmlFor='name'>Your name</Label>
                  <FormWrapperValidation>
                    <Input
                      onKeyDown={evt => handleKeyDown(evt)}
                      autoFocus
                      name='name'
                      type='text'
                      value={name}
                      onChange={onChange}
                      placeholder='eg: Michael Jordan'
                    />
                    <Validation checked={name.length >= 3}>
                      <i className='material-icons'>{name.length >= 3 ? 'check' : 'clear'}</i>
                    </Validation>
                  </FormWrapperValidation>
                </FormWrapper>

                <FormWrapper>
                  <Label htmlFor='email'>Your email adress</Label>
                  <FormWrapperValidation>
                    <Input
                      onKeyDown={evt => handleKeyDown(evt)}
                      name='email'
                      type='text'
                      value={email}
                      onChange={onChange}
                      placeholder='eg: mail@site.com'
                    />
                    <Validation checked={isEmail(email)}>
                      <i className='material-icons'>{isEmail(email) ? 'check' : 'clear'}</i>
                    </Validation>
                  </FormWrapperValidation>
                </FormWrapper>

                <FormWrapper>
                  <Label htmlFor='password'>Password (min 8 characters)</Label>
                  <FormWrapperValidation>
                    <Input
                      onKeyDown={evt => handleKeyDown(evt)}
                      name='password'
                      type='password'
                      value={password}
                      onChange={onChange}
                      placeholder='choose a safe password'
                    />
                    <Validation checked={password.length >= 8}>
                      <i className='material-icons'>{password.length >= 8 ? 'check' : 'clear'}</i>
                    </Validation>
                  </FormWrapperValidation>
                </FormWrapper>
              </ContentWrapper>
            ) : (
              <ContentWrapper>
                <FormWrapper>
                  <Label htmlFor='email'>Your email adress</Label>
                  <Input
                    onKeyDown={evt => handleKeyDown(evt)}
                    autoFocus
                    name='email'
                    type='text'
                    value={email}
                    onChange={onChange}
                    placeholder='eg: mail@site.com'
                  />
                </FormWrapper>
                <FormWrapper>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    onKeyDown={evt => handleKeyDown(evt)}
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChange}
                    placeholder='your password'
                  />
                </FormWrapper>
              </ContentWrapper>
            )}

            <LoginWrapper>
              <LoginBtn
                id='login'
                onKeyDown={evt => handleKeyDown(evt)}
                onClick={confirm}
                role='switch'
                aria-checked='false'
                tabIndex='0'
              >
                {newUser ? 'create account' : 'login'}
              </LoginBtn>
              <SignUpToggler>
                {!newUser ? (
                  <Link to='/sign-up'>
                    {error === 'GraphQL error: No user found with that information' && '⇾ '}need to create an account?
                  </Link>
                ) : (
                  <Link to='/login'>
                    {error === 'GraphQL error: User already exists with that information' && '⇾ '} already have an
                    account ?
                  </Link>
                )}
              </SignUpToggler>
            </LoginWrapper>
          </Wrapper>
        </PageWrapper>
      )
    }}
  </Login>
)
