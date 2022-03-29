import React, { Component } from "react";
import Header from "../Header";
import EmployeeData from "../EmployeeData";
import './index.css'



export default class Adduser extends Component {
    state = {
        fullname: '',
        empid: '',
        email: '',
        skilset: '',
        experince: '',
        showSubmitError: false,
        errorMsg: '',
      }
      onChangeFullname = event => {
        this.setState({fullname: event.target.value})
      }
    
      onChangeEmployeeId = event => {
        this.setState({empid: event.target.value})
      }

      onChangeEmail = event => {
        this.setState({email: event.target.value})
      }

      onChangeSkillset = event => {
        this.setState({skillset: event.target.value})
      }

      onChangeExperince = event => {
        this.setState({experince: event.target.value})
      }

      submitForm = async event => {
        event.preventDefault()
        console.log(this.state)
        // const {username, password} = this.state
        // const userDetails = {username, password}
        // // console.log(userDetails)
        // const url = 'https://apis.ccbp.in/login'
        // const options = {
        //   method: 'POST',
        //   body: JSON.stringify(userDetails),
        // }
        // const response = await fetch(url, options)
        // const data = await response.json()
        // if (response.ok === true) {
        //   this.onSubmitSuccess(data.jwt_token)
        // } else {
        //   this.onSubmitFailure(data.error_msg)
        // }
      }
     
    render() {
        const {fullname} = this.state
        const {empid} = this.state
        const {email} = this.state
        const {skillset} = this.state
        const {experince} = this.state
        return (
            <> 
            <Header />
            <EmployeeData />
            <button>add emmployye</button>
            <div className="container-2"> 
                <h1 className="heading-3">Add Employee</h1>
                <form onSubmit={this.submitForm} className="form-continer-2">
                <label className="input-label-2" htmlFor="fullname">
                  Employee Full Name
                </label>
                <input
                    type="text"
                    id="fullname"
                    className="username-input-field"
                    value={fullname}
                    onChange={this.onChangeFullname}
                    placeholder="Full Name"
                />

<label className="input-label-2" htmlFor="empid">
                    Employee ID
                </label>
                <input
                    type="text"
                    id="empid"
                    className="username-input-field"
                    value={empid}
                    onChange={this.onChangeEmployeeId}
                    placeholder="Employee ID"
                />
<label className="input-label-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="username-input-field"
                    value={email}
                    onChange={this.onChangeEmail}
                    placeholder="Email"
                />

<label className="input-label-2" htmlFor="skillset">
                    Skillset
                </label>
                <input
                    type="text"
                    id="skillset"
                    className="username-input-field"
                    value={skillset}
                    onChange={this.onChangeSkillset}
                    placeholder="Skillset"
                />

<label className="input-label-2" htmlFor="experince">
                    Number of Years Experince
                </label>
                <input
                    type="text"
                    id="experince"
                    className="username-input-field"
                    value={experince}
                    onChange={this.onChangeExperince}
                    placeholder="Number of Years Experince"
                />
                 <button type="submit" className="button">Submit</button>
                 </form>
            </div>
            </>
        )
    }
}

