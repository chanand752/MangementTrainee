import {Component} from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import SignUpForm from '../SignUpPage';
// import UserRegistration from '../UserRegistration'


import './index.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    showSubmitError: false,
    msg: '',
  }

  onChangeUsername = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }


  onSubmitSuccess = jwtToken => {
    const {history} = this.props
  // sessionStorage.setItem('jwt_token', jwtToken, {
  //   expires:"",
  //   path: '/'
  // })
    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
      path: '/',
    })
    history.replace('/')
   
  }

  onSubmitFailure = msg => {
    console.log(msg)
    this.setState({showSubmitError: true, msg})
  }
 

  submitForm = async event => {
    event.preventDefault()
    const {email, password} = this.state
    const userDetails = {email, password}
    console.log(userDetails)
    const url = 'http://172.17.12.99:5000/rou/login'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails),
    }
    console.log(options)
    const response = await fetch(url,options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.token)
      window.alert("Login Suceess")
      console.log(data.token)
    } else {
      this.onSubmitFailure(data.msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {email} = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          USERNAME
        </label>
        <input
          type="text"
          id="email"
          className="username-input-field-2"
          value={email}
          onChange={this.onChangeUsername}
          placeholder="Enter Your Email"
        />
      </>
    )
  }

  

  render() {
    const {showSubmitError, msg} = this.state
    const jwtToken = Cookies.get('jwt_token')
     //const jwtToken = sessionStorage.getItem('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return ( 
      <div className="login-form-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIOL1XQRa9QX7dUe3tQyT6V_JC9TVRycLZA&usqp=CAU"
          className="login-img"
          alt="login-img"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className='heading'>Login</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
         
          <button type="submit" className="login-button">
            Login
          </button>
          <div> 
          </div>
          {showSubmitError && <p className="error-message">*{msg}</p>}
          {/* <p className='paragraph'>Sales Repersentives Login Here</p>
          <Link to="/registration"><button type='onClick' className='login-button1'>Sales Repersentives Login {UserRegistration} </button></Link> */}
             <Link to="/signup"><p className='signup'>New User Sign Up Clik Here {SignUpForm} </p></Link>
        </form>
        
        </div>
      
    )
  }
}

export default LoginForm
