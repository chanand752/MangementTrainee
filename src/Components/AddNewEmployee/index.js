import React, { Component } from 'react';
import Header from '../Header';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './index.css'
// import {blogsData2} from './ TrainingStatus';


 class AddNewEmployee extends Component {
  state = {
    Eid: '',
    Ename: '',
    Email: '',
    Trainning: '',
    TrainningStatus: '',
    Skillset: '',
    redirect: '',
    data: '',
  }


  onChangeEid = event => {
    this.setState({ Eid: parseInt(event.target.value) })
  }

  onChangeEmployeeName = event => {
    this.setState({ Ename: event.target.value })
  }

  onChangeEmail = event => {
    this.setState({ Email: event.target.value })
  }

  onChangeTrinning = event => {
    this.setState({ Trainning: event.target.value })
  }
  onChangeTrainningStatus = event => {
    this.setState({ TrainningStatus: event.target.value })
  }
  onChangeSkillset = event => {
    this.setState({ Skillset: event.target.value })
  }
 
 


 
  submitForm = async event => {
    this.props.history.push('/trainingStatus');
    event.preventDefault()
    const { Eid, Ename, Email, Trainning, TrainningStatus, Skillset } = this.state
    const userDetails1 = { Eid, Ename, Email, Trainning, TrainningStatus, Skillset }
    console.log(userDetails1)
    const url = 'http://172.17.12.112:3000/data/post'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userDetails1),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
       alert("You have been successfully created.")

    }
    else {
      alert(data.msg + " Your Data Does't exists")
    }

    this.setState(data)
    console.log(data)
    // window.alert("New Employye Details Created Sucessfully")

  }


  render() {

    const { Eid } = this.state
    const { Ename } = this.state
    const { Email } = this.state
    const { TrainningStatus } = this.state
    const { Trainning } = this.state
    const { Skillset } = this.state

   
  


    return (
      <>
        <Header />
        <div className='body-post'>
          <h3 className='heading-post'>Add New Employee Details</h3>
          <form onSubmit={this.submitForm.bind(this)} className="container-post-1">
            <div className='form-group-put'>
              <label className='input-label-1-post'>Employee Id: </label>
              <input type="text" value={Eid} onChange={this.onChangeEid} className="input-field-post" />
            </div>
            <div className='form-group-put'>
              <label className='input-label-1-post'>Employee Full Name: </label>
              <input type="text" value={Ename} onChange={this.onChangeEmployeeName} className="input-field-post" />
            </div>
            <div className='form-group-put'>
              <label className='input-label-1-post'>Email: </label>
              <input type="text" value={Email} onChange={this.onChangeEmail} className="input-field-post" />
            </div>
            <div className='form-group-put'>
              <label className='input-label-1-post'>Skillset: </label>
              <input type="text" value={Skillset} onChange={this.onChangeSkillset} className="input-field-post" />
            </div>
            <div className='form-group-put'>
              <label className='input-label-1-post'>Training: </label>
              <input type="text" value={Trainning} onChange={this.onChangeTrinning} className="input-field-post" />
            </div>
            <div className='form-group-post'>
              <label className='input-label-1-post'>TrainingStatus</label>
              <input type="text" value={TrainningStatus} onChange={this.onChangeTrainningStatus} className="input-field-post" />
            </div>
            <div>
              {/* <input type="submit" value="Add New Employee" className='button-post-Employee' /> */}
              <button className='button-post-Employee button1' type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}



export default withRouter(AddNewEmployee);