// @flow
import * as React from 'react'
import Login from '../containers/Login'

type Data = {
  login: boolean,
  name: string,
  email: string,
  password: string,
  error: {},
  onChange: Function,
  toggleLogin: Function,
  confirm: Function
}

export default ({ history }: { history: {} }) => (
  <div>
    <Login history={history}>
      {(data: Data) => {
        const {
 login, email, name, password, error, onChange, toggleLogin, confirm,
} = data

        return (
          <div>
            <h4>{login ? 'Login' : 'Sign Up'}</h4>
            {error && <p>User already exist with that email</p>}
            <div className='flex flex-column'>
              {!login && <input name='name' value={name} onChange={onChange} type='text' placeholder='Your name' />}
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
                {login ? 'login' : 'create account'}
              </div>
              <div
                className='pointer button'
                onClick={toggleLogin}
                onKeyDown={() => {}}
                role='switch'
                aria-checked='false'
                tabIndex='0'
              >
                {login ? 'need to create an account?' : `${error && '⇾'} already have an account?`}
              </div>
            </div>
          </div>
        )
      }}
    </Login>
  </div>
)
