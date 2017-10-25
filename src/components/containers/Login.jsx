import { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../../lib/constants'
import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../../graphql/mutations'

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  onChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  confirm = async () => {
    const { name, email, password } = this.state

    if (this.state.login) {
      const result = await this.props.signinUserMutation({
        variables: {
          email,
          password,
        },
      })
      const { id, token } = result.data.signinUser.user
      this.saveUserData(id, token)
    } else {
      const result = await this.props.createUserMutation({
        variables: {
          name,
          email,
          password,
        },
      })
      const { id, token } = result.data.signinUser.user
      this.saveUserData(id, token)
    }

    this.props.history.push('/recipes')
  }

  saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }

  toggleLogin = () => {
    this.setState({ login: !this.state.login })
  }

  render() {
    const data = {
      state: this.state, onChange: this.onChange, toggleLogin: this.toggleLogin, confirm: this.confirm,
    }
    return this.props.children(data)
  }
}

export default compose(
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' })
)(Login)
