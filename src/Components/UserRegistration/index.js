// import React, { Component } from "react";
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

class UserRegistration extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }
    componentDidMount() {
        this.handleSubmit()
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const {username, email, password,conform_password,gender,mobile_number } = this.state.input
        const newuserDetails = {username,email,password, conform_password,gender,mobile_number}
        console.log(newuserDetails)
        const url = 'http://172.17.12.99:5000/rou/sign-in'
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newuserDetails),
        }
        const response = await fetch(url, options)
        // console.log(response)
        const data = await response.json()
        this.setState(data)
        console.log(data)

        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["username"] = "";
            input["email"] = "";
            input["password"] = "";
            input["conform_password"] = "";
            input["mobile_number"]="";
            input["gender"] = "";
            this.setState({ input: input });

            alert(' User Registration Form is submited');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["conform_password"]) {
            isValid = false;
            errors["conform_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["conform_password"] !== "undefined") {

            if (input["password"] !== input["conform_password"]) {
                isValid = false;
                errors["password"] = "Password & Confoirm passwords don't match.";
            }
        }
        if (!input["mobile_number"]) {
            isValid = false;
            errors["mobile_number"] = "Please Enter your Mobile Number";
        }

        if (!input["gender"]) {
            isValid = false;
            errors["gender"] = "Please select your gender.";
        }


        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        
        return (
            <>
                <div className="body1">
                    <h1 className="heading1">New User Registaration</h1>
                    <form onSubmit={this.handleSubmit} className="container">

                        <div className="form-group">
                            <label for="username" className="input-label-1">Name:</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.input.username}
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter name"
                                id="username" />

                            <div className="text-danger">{this.state.errors.name}</div>
                        </div>

                        <div className="form-group">
                            <label for="email" className="input-label-1">Email Address:</label>
                            <input
                                type="text"
                                name="email"
                                value={this.state.input.email}
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter email"
                                id="email" />

                            <div className="text-danger">{this.state.errors.email}</div>
                        </div>

                        <div className="form-group">
                            <label for="password" className="input-label-1">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.input.password}
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter password"
                                id="password" />

                            <div className="text-danger">{this.state.errors.password}</div>
                        </div>

                        <div className="form-group">
                            <label for="conform_password" className="input-label-1">Confirm Password:</label>
                            <input
                                type="password"
                                name="conform_password"
                                value={this.state.input.conform_password}
                                onChange={this.handleChange}
                                class="form-control"
                                placeholder="Enter confirm password"
                                id="conform_password" />

                            <div className="text-danger">{this.state.errors.confirm_password}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber" className="input-label-1">Phone Number</label>
                            <input type="text" name="mobile_number"
                                onChange={this.handleChange}
                                value={this.state.input.mobile_number}
                                placeholder="Enter Your phone number.."
                                class/>
                            <div className="text-danger">{this.state.errors.mobile_number}</div>
                        </div>

                        <div class="form-group">
                            <label htmlFor="gender" className="input-label-1">Gender</label>
                            <select name="gender"
                                onChange={this.handleChange}
                                value={this.state.input.gender} >
                                <option value="select">--Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="female">Other</option>
                            </select>
                            <div className="text-danger">{this.state.errors.gender}</div>
                        </div>

                        <input type="submit" value="Submit" class="btn btn-success" />
                    </form>
                </div>

            </>
        );
    }
}

export default UserRegistration;




























/*
const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class UserRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            conformpassword: '',
            mobile: '',
            isError: {
                name: '',
                email: '',
                password: '',
                conformpassword: '',
                mobile: '',
               
            
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            window.alert("User Created SuccsFully");
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            case "conformpassword":
                isError.conformpassword =
                value.password !== value.conformpassword ? "password did not match" : " ";
                break;
            case "mobile":
                isError.mobile =
                    value.length < 10 ? "Atleast 10 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
       
    };

    render() {
        const { isError } = this.state;
    

        return (
            <>
                <div className="body1">
                    <h1 className="heading1">User Registration Form</h1>
                    <form onSubmit={this.onSubmit} noValidate className="container">
                        <div className="form-group">
                            <label className="input-label-1 " >Name</label>
                            <input
                                type="text"
                                className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                name="name"
                                onChange={this.formValChange}
                            />
                            {isError.name.length > 0 && (
                                <span className="invalid-feedback">{isError.name}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="input-label-1 ">Email</label>
                            <input
                                type="email"
                                className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                name="email"
                                onChange={this.formValChange}
                            />
                            {isError.email.length > 0 && (
                                <span className="invalid-feedback">{isError.email}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="input-label-1 ">Password</label>
                            <input
                                type="password"
                                className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                name="password"
                                onChange={this.formValChange}
                            />
                            {isError.password.length > 0 && (
                                <span className="invalid-feedback">{isError.password}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="input-label-1 ">Conform Password</label>
                            <input
                                type="password"
                                className={isError.conformpassword.length > 0 ? "is-invalid form-control" : "form-control"}
                                name="conformpassword"
                                onChange={this.formValChange}
                            />
                            {isError.conformpassword.length > 0 && (
                                <span className="invalid-feedback">{isError.conformpassword}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="input-label-1 ">Mobile Number</label>
                            <input
                                type="text"
                                className={isError.mobile.length > 0 ? "is-invalid form-control" : "form-control"}
                                name="mobile"
                                onChange={this.formValChange}
                            />
                            {isError.mobile.length > 0 && (
                                <span className="invalid-feedback">{isError.password}</span>
                            )}
                        </div>

                        <div>
                            <label className="input-label-1">
                                Select Your Gender:
                                <select value={this.state.value} onChange={this.formValChange} >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </label>
                            <input type="radio" value="Male" name="gender" /> Male
                        <input type="radio" value="Female" name="gender" /> Female
                        <input type="radio" value="Other" name="gender" /> Other
                        </div>
                        <div className="form-group">
                        <label className="input-label-1">Enter Your Address : </label>
                        <input type="textarea"
                            name="textValue"
                            className="textarea"
                            onChange={this.handleChange}
                        />
                    </div>
                        <button type="submit" className="button">Create User</button>

                    </form>
                </div>
            </>
        );
    }
}

*/