import React from 'react'
import Login from '../containers/Login'

export default ({ history }) => (
  <div>
    <Login history={history}>
      {({
 state, onChange, toggleLogin, confirm,
}) => (
  <div>
    <h4>{state.login ? 'Login' : 'Sign Up'}</h4>
    <div className='flex flex-column'>
      {!state.login && (
      <input
        name='name'
        value={state.name}
        onChange={evt => onChange(evt)}
        type='text'
        placeholder='Your name'
      />
            )}
      <input
        name='email'
        value={state.email}
        onChange={evt => onChange(evt)}
        type='text'
        placeholder='Your email address'
      />
      <input
        name='password'
        value={state.password}
        onChange={evt => onChange(evt)}
        type='password'
        placeholder='Choose a safe password'
      />
    </div>
    <div>
      <div onClick={() => confirm()} onKeyDown={() => {}} role='switch' aria-checked='false' tabIndex='0'>
        {state.login ? 'login' : 'create account'}
      </div>
      <div
        className='pointer button'
        onClick={toggleLogin}
        onKeyDown={() => {}}
        role='switch'
        aria-checked='false'
        tabIndex='0'
      >
        {state.login ? 'need to create an account?' : 'already have an account?'}
      </div>
    </div>
  </div>
      )}
    </Login>
  </div>
)
