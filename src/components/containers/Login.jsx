import { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import isEmail from 'validator/lib/isEmail'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../../lib/constants'
import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../../graphql/mutations'

class Login extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    error: '',
  }

  onChange = (evt) => {
    // if (evt.target.name === 'email') this.setState({ error: '' })
    this.setState({ [evt.target.name]: evt.target.value })
  }

  confirm = async (evt) => {
    evt.persist()
    const { name, email, password } = this.state
    if (!isEmail(email)) {
      this.setState({ error: 'Your email must be an email adress' })
    } else if (password.length < 8) {
      this.setState({ error: 'Your password must be at least 8 characters' })
    } else if (name.length < 3) {
      this.setState({ error: 'Your name must be at least 3 characters' })
    } else {
      try {
        if (!this.props.newUser) {
          const result = await this.props.signinUserMutation({
            variables: {
              email,
              password,
            },
          })
          const { id } = result.data.signinUser.user
          const { token } = result.data.signinUser
          this.saveUserData(id, token)
          this.props.history.push('/recipes')
        } else {
          const result = await this.props.createUserMutation({
            variables: {
              name,
              email,
              password,
            },
          })
          const { id } = result.data.signinUser.user
          const { token } = result.data.signinUser
          this.saveUserData(id, token)
          this.props.history.push('/create-recipe')
        }
      } catch (error) {
        console.log('error', error)
        this.setState({ error: error.message })
        evt.target.blur()
      }
    }
  }

  saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
    console.log(id)
  }

  render() {
    const data = {
      login: this.state.login,
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      onChange: this.onChange,
      toggleLogin: this.toggleLogin,
      confirm: this.confirm,
      error: this.state.error,
    }
    return this.props.children(data)
  }
}

export default compose(
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' })
)(Login)
