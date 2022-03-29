import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './index.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            conform_password: '',
            //dob: '', 
            role:'',
            gender: 'select',
            mobile_number: '',
            //city: 'select', 
            showSubmitError: false,
            msg: '',   
            formErrors: {}
        };

        this.initialState = this.state;
    }


    // onSubmitSuccess = => {
    //     const {history} = this.props
    //     history.replace('/')
    //   }


    //   onSubmitFailure = msg => {
    //     console.log(msg)
    //     this.setState({showSubmitError: true, msg})
    //   }

    handleFormValidation() {
        const { username, email, password, conform_password, gender,role, mobile_number } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //user name     
        if (!username) {
            formIsValid = false;
            formErrors["usernameErr"] = "User Name is required.";
        }

        //Email    
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "Invalid email id.";
        }
        // password
        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "Password Is Required"
        }


        if (password === '' || conform_password !== password) {
            formIsValid = false;
            formErrors["conform_passwordErr"] = "Password and Conform Password Does't Match"
        }

        if (!role) {
            formIsValid = false;
            formErrors["roleErr"] = " Role  is required.";
        }
   

        //Gender    
        if (gender === '' || gender === "select") {
            formIsValid = false;
            formErrors["genderErr"] = "Select gender.";
        }

        //Phone number    
        if (!mobile_number) {
            formIsValid = false;
            formErrors["mobile_numberErr"] = "Phone number is required.";
        }

        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(mobile_number)) {
                formIsValid = false;
                formErrors["mobile_numberErr"] = "Invalid phone number.";
            }
        }

        //City    
        //     if (city === '' || city === "select") {    
        //         formIsValid = false;    
        //         formErrors["cityErr"] = "Select city.";    
        //     }    

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        this.props.history.replace('/login');
        e.preventDefault();
        if (this.handleFormValidation()) {
            // alert('You have been successfully registered.')
            this.setState(this.initialState)

        }
        const { username, email, password,conform_password,role,gender,mobile_number } = this.state
        const newuserDetails = { username, email,password, role,conform_password,gender,mobile_number}
        console.log(newuserDetails)
        console.log(newuserDetails)
        const url = 'http://172.17.12.99:5000/rou/sign-in'
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newuserDetails),
        }
        const response = await fetch(url, options)
        const status = response.status
        console.log(status)
        // console.log(response)
        const data = await response.json()
        if(response.ok === true) { 
            alert("You have been successfully registered.")
        }
        else {
            alert(data.msg + " Your Data Does't exists")
          }
        this.setState(data)
        console.log(data)

        /*
        const getSummaryDetails = () =>{
   const url = 'https://examplesitename/test/summary'
   fetch(url).then(function(res)=>{
    console.log(res.status) //you will get your status code
    setOrderSummary(orderSummary = res)  
   })
   .catch(function(err){
     alert(err.message)
   })
}
        */
       
    }


    render() {

        const { usernameErr, emailErr, passwordErr, conform_passwordErr,roleErr, genderErr, mobile_numberErr } = this.state.formErrors;
        const { username, email, password, conform_password, role, gender, mobile_number } = this.state
        // console.log(this.state)

        return (
            <div className="formDiv">
                <h3 className="heading-user" >New User Registration Form </ h3>
                <div>
                    <form onSubmit={this.handleSubmit} className="card-view">
                        <div>
                            <label htmlFor="username">Enter Your Full Name</label>
                            <input type="text" name="username"
                                value={username}
                                onChange={this.handleChange}
                                placeholder="Enter Your Name"
                                className={usernameErr ? ' showError' : ''} />
                            {usernameErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{usernameErr}</div>
                            }

                        </div>
                        <div>
                            <label htmlFor="email">Email Id</label>
                            <input type="text" name="email"
                                value={email}
                                onChange={this.handleChange}
                                placeholder="Your email id.."
                                className={emailErr ? ' showError' : ''} />
                            {emailErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                            }

                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                value={password}
                                onChange={this.handleChange}
                                placeholder="Enter Your Password"
                                className={passwordErr ? ' showError' : ''} />
                            {passwordErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="conform_password">Conform Password</label>
                            <input type="password" name="conform_password"
                                value={conform_password}
                                onChange={this.handleChange}
                                placeholder="Conform Your Password"
                                className={conform_passwordErr === password ? ' showError' : ''} />
                            {conform_passwordErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{conform_passwordErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="role">Enter Your Role </label>
                            <input type="text" name="role"
                                value={role}
                                onChange={this.handleChange}
                                placeholder="Enter Your Role"
                                className={roleErr ? ' showError' : ''} />
                            {roleErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{roleErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" onChange={this.handleChange}
                                className={genderErr ? ' showError' : ''}
                                value={gender} >
                                <option value="select">--Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="female">Other</option>
                            </select>
                            {genderErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" name="mobile_number"
                                onChange={this.handleChange}
                                value={mobile_number}
                                placeholder="Enter Your phone number.."
                                className={mobile_numberErr ? ' showError' : ''} />
                            {mobile_numberErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{mobile_numberErr}</div>
                            }
                        </div>
                        {/* <div>    
                            <label htmlFor="city">City</label>    
                            <select name="city"    
                                value={city}    
                                onChange={this.handleChange}    
                                className={cityErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Guntur">Guntur</option>    
                                <option value="Vijayawada">Vijayawada</option>    
                                <option value="Tenali">Tenali</option>    
                            </select>    
                            {cityErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{cityErr}</div>    
                            }    
                        </div>     */}
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div >
        )
    }
}

export default withRouter(SignUpForm);