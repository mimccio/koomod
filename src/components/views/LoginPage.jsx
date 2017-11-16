// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'

import Login from '../containers/Login'
import { PageWrapper } from '../comps/layouts'
import { Input as InputStyle, Label } from '../comps/inputs/Form'
import palette from '../../style/palette'

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

const FormWrapper = styled.div`padding: 10px;`

const ErrorWrapper = styled.div`
  padding-top: 20px;
  color: ${palette.danger.light};
  height: 30px;
`

const Validation = styled.div`
  padding: 10px;
  color: ${({ checked }) => (checked ? palette.success.light : palette.danger.light)};
`

const Input = styled(InputStyle)`width: 200px;`

export default ({ history, newUser }: { history?: {}, newUser?: boolean }) => (
  <Login history={history} newUser={newUser}>
    {(data: Data) => {
      const {
 email, name, password, error, onChange, confirm,
} = data

      return (
        <PageWrapper>
          <Wrapper>
            <ErrorWrapper>{error && <p>{error.replace('GraphQL error: ', '')}</p>}</ErrorWrapper>

            {newUser ? (
              <ContentWrapper>
                <FormWrapper>
                  <Label htmlFor='name'>Your name</Label>
                  <Input
                    autoFocus
                    name='name'
                    type='text'
                    value={name}
                    onChange={onChange}
                    placeholder='eg: Michael Jordan'
                  />
                </FormWrapper>

                <FormWrapper>
                  <Label htmlFor='email'>Your email adress</Label>
                  <FormWrapperValidation>
                    <Input
                      name='email'
                      type='text'
                      value={email}
                      onChange={onChange}
                      placeholder='eg: michaeljordan@komi.com'
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
                    autoFocus
                    name='email'
                    type='text'
                    value={email}
                    onChange={onChange}
                    placeholder='eg: michaeljordan@komi.com'
                  />
                </FormWrapper>
                <FormWrapper>
                  <Label htmlFor='email'>Password</Label>
                  <Input
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChange}
                    placeholder='your password'
                  />
                </FormWrapper>
              </ContentWrapper>
            )}

            <div>
              <div onClick={confirm} onKeyDown={() => {}} role='switch' aria-checked='false' tabIndex='0'>
                {newUser ? 'create account' : 'login'}
              </div>
              <div>
                {!newUser ? (
                  <Link to='/sign-up'>need to create an account?</Link>
                ) : (
                  <Link to='/login'>
                    {error === 'GraphQL error: User already exists with that information' && '⇾'} already have an
                    account ?
                  </Link>
                )}
              </div>
            </div>
          </Wrapper>
        </PageWrapper>
      )
    }}
  </Login>
)
