import React, {Component} from 'react';
import Header from '../Header';
import './index.css'
// import {blogsData2} from './ TrainingStatus';

// import { Redirect } from 'react-router';

export default class TicketStatusApproved extends Component{
    state = {
        id:'',
        name:'',
        no_of_requirement:'',
        skillset:'',
        experiance: '',
        role:'',
        purpose:'',
        ticketstatus:'',
      }

       onChangeId = event => {
           this.setState({id:event.target.value})
       }
      onChangeName = event => {
        this.setState({name:event.target.value})
      }

      onChangeno_of_requirement= event => {
        this.setState({no_of_requirement: event.target.value})
      }
      
      onChangeSkillset= event => {
        this.setState({skillset: event.target.value})
      }
      onChangeExperience = event => {
        this.setState({experiance: event.target.value})
      }

      onChangeRole = event => {
        this.setState({role: event.target.value})
      }
      onChangeTicketStatus = event => {
          this.setState({ticketstatus:event.target.value})
      }
      onChangeTextarea = event => {
        this.setState({purpose: event.target.value})
      }
      

submitForm = async event => {
    event.preventDefault()
    const {id,name,no_of_requirement,skillset,experiance,role, ticketstatus,purpose} = this.state
    const EmployeeDetails = {id,name,no_of_requirement,skillset,experiance,role,ticketstatus,purpose}
    console.log(EmployeeDetails)
    const url = 'http://172.17.12.99:5000/rou/ticket'
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(EmployeeDetails),
    }
    const response = await fetch(url, options)
    // console.log(response)
    const data = await response.json()
    this.setState(data)
     console.log(data)

    // if (response.ok === true) {
    //   this.onSubmitSuccess(data.jwt_token)
    // } else {
    //   this.onSubmitFailure(data.error_msg)
    // }
    window.alert("Tcket Status Updated")
  }


render() {
        const {id} = this.state
        const {name} = this.state
        const {no_of_requirement} = this.state
        const {skillset} = this.state
       const {experiance} = this.state
        const {role} = this.state
        const {purpose} = this.state
        const {ticketstatus} = this.state
        
   

// const { redirect } = this.state;
// if (redirect) {
//   return <Redirect to='/view' />;
// }
return(
    <>  
    <Header />
  <div className='body-new'>
  <h3 className='heading-post'>Ticket Status Approved </h3>
  <form onSubmit={this.submitForm} className="container-new">
  <div className='form-group-new'>
      <label className='input-label-1-new'>Enter Your Employee Id </label>
      <input type="text" value= {id} onChange={this.onChangeId} className="input-field-new"  />
    </div>
  <div className='form-group-new'>
      <label className='input-label-1-new'>Enter Your Name </label>
      <input type="text" value= {name} onChange={this.onChangeName} className="input-field-new"  />
    </div>
    <div className='form-group-new'>
      <label className='input-label-1-new'>Enter No.of Requirements: </label>
      <input type="text" value={no_of_requirement} onChange={this.onChangeno_of_requirement} className="input-field-new"  />
    </div>
    <div className='form-group-new'>
      <label className='input-label-1-new'>SkillSet Required: </label>
      <input type="text" value={skillset} onChange={this.onChangeSkillset} className="input-field-new"  />
    </div>
    <div className='form-group-new'>
      <label className='input-label-1-new'>Experince Required: </label>
      <input type="text" value={experiance} onChange={this.onChangeExperience} className="input-field-new"  />
    </div>
    <div className='form-group-new'>
      <label className='input-label-1-new'>Enter Your Role </label>
      <input type="text" value={role} onChange={this.onChangeRole} className="input-field-new"  />
    </div>
    <div className='form-group-new'>
      <label className='input-label-1-new'>TicketStatus</label>
      <input type='text' value={ticketstatus} onChange={this.onChangeTicketStatus} className="input-field-new" />
    </div>

  <div className='form-group-new'>
      <label className='input-label-1-new'>Enter Your Comments</label>
      <textarea value={purpose} onChange={this.onChangeTextarea} className="textarea-new">  </textarea> 
    </div>
   
    <div>
      {/* <input type="submit" value="Submit" className='button-post' /> */}
      <button className='button-post-Approve button1' type='submit'>Submit</button>
    </div>
  </form>
  </div>
  </>
)
}
}



