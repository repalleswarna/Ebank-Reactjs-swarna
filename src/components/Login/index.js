import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  AppContainer,
  LoginFormContainer,
  LoginImageContainer,
  LoginImage,
  FormContainer,
  Heading,
  InputContainer,
  LabelElement,
  InputElement,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pinCode: '', errorMsg: '', showSubmitError: false}

  onChangeuserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangepin = event => {
    this.setState({pinCode: event.target.value})
  }

  renderUserIdField = () => {
    const {userId} = this.state
    return (
      <>
        <LabelElement htmlFor="userId">User ID</LabelElement>
        <InputElement
          id="userId"
          type="text"
          value={userId}
          onChange={this.onChangeuserId}
          placeholder="Enter User ID"
        />
      </>
    )
  }

  renderPinField = () => {
    const {pinCode} = this.state
    return (
      <>
        <LabelElement htmlFor="pin">Pin</LabelElement>
        <InputElement
          id="pin"
          type="password"
          value={pinCode}
          onChange={this.onChangepin}
          placeholder="Enter PIN"
        />
      </>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userId, pinCode} = this.state
    const userDetails = {user_id: userId, pin: pinCode}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <LoginFormContainer>
          <LoginImageContainer>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
          </LoginImageContainer>
          <FormContainer onSubmit={this.submitForm}>
            <Heading>Welcome Back!</Heading>
            <InputContainer>{this.renderUserIdField()}</InputContainer>
            <InputContainer>{this.renderPinField()}</InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginFormContainer>
      </AppContainer>
    )
  }
}

export default Login
