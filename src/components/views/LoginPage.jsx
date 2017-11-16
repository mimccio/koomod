// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
const FormWrapper = styled.div`padding: 10px;`

const ErrorWrapper = styled.div`
  padding: 10px;
  color: ${palette.danger.light};
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
            {error &&
              (error === 'GraphQL error: User already exists with that information' ? (
                <ErrorWrapper>User already exist with that email</ErrorWrapper>
              ) : (
                <ErrorWrapper>{error}</ErrorWrapper>
              ))}

            {newUser ? (
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
            ) : (
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
                  <Input
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
                    placeholder='choose a safe password'
                  />
                </FormWrapper>
              </ContentWrapper>
            )}

            <div>
              <div onClick={confirm} onKeyDown={() => {}} role='switch' aria-checked='false' tabIndex='0'>
                {newUser ? 'login' : 'create account'}
              </div>
              <div>
                {newUser ? (
                  <Link to='/sign-up'>need to create an account?</Link>
                ) : (
                  <Link to='/login'>{error && '⇾'} already have an account ?</Link>
                )}
              </div>
            </div>
          </Wrapper>
        </PageWrapper>
      )
    }}
  </Login>
)
