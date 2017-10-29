// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'

import Login from '../containers/Login'
import { PageLayout } from '../comps/layouts'

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

export default ({ history, signUp }: { history: {}, signUp: boolean }) => (
  <Login history={history} signUp={signUp}>
    {(data: Data) => {
      const {
 email, name, password, error, onChange, confirm,
} = data

      return (
        <PageLayout>
          {error &&
            (error === 'GraphQL error: User already exists with that information' ? (
              <p>User already exist with that email</p>
            ) : (
              <p>{error}</p>
            ))}
          <div className='flex flex-column'>
            {signUp && <input name='name' value={name} onChange={onChange} type='text' placeholder='Your name' />}
            <input name='email' value={email} onChange={onChange} type='text' placeholder='Your email address' />
            <input
              name='password'
              value={password}
              onChange={onChange}
              type='password'
              placeholder='Choose a safe password'
            />
          </div>
          <div>
            <div onClick={confirm} onKeyDown={() => {}} role='switch' aria-checked='false' tabIndex='0'>
              {!signUp ? 'login' : 'create account'}
            </div>
            <div>
              {!signUp ? (
                <Link to='/sign-up'>need to create an account?</Link>
              ) : (
                <Link to='/login'>{error && '⇾'} already have an account ?</Link>
              )}
            </div>
          </div>
        </PageLayout>
      )
    }}
  </Login>
)
