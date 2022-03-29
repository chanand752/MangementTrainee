import './App.css';
//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import UserRegistration from './Components/UserRegistration';
import EmployeeData from './Components/EmployeeData';
import TrainingStatus from './Components/TraningStatus';
import EmployeeDataEdit from './Components/EmployeeDataEdit';
import TicketStatusApproved from './Components/TicketStatusApproved';
import SignUpForm from './Components/SignUpPage';
import MessageBox from './Components/MessageBox';
import NotFound from './Components/NotFound';
import ProtectedRoute from './Components/ProtectedRoute'
import AddNewEmployee from './Components/AddNewEmployee';
import AddNewResource from './Components/AddNewResource';


class App extends  Component {
   render () {

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/messagebox" component={MessageBox} />
        <Route exact path ="/registration" component={UserRegistration} />
        <Route exact path ="/signup" component={SignUpForm} />
        <Route exact path ="/employeeEdit/:Eid" component={EmployeeDataEdit} />
        <Route exact path ="/addnewemployee" component={AddNewEmployee} />
        <Route exact path ="/addnewresource" component={AddNewResource} />
        <Route exact path ="/TicketStatus" component={TicketStatusApproved} />
        <ProtectedRoute exact path ="/employeeSearch" component={EmployeeData} />
        <ProtectedRoute exact path ="/trainingStatus" component={TrainingStatus} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    </div>
  )
}
}

export default App;
