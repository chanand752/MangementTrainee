import React, {Component} from "react";
import Header from "../Header";
import { Link } from 'react-router-dom'
import TicketStatusApproved from "../TicketStatusApproved";
import './index.css'

export default class MessageBox  extends Component {
    state = { searchInput : '', EmployeesData: [], }

    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value
        })
    }

    componentDidMount() {
        this.getEmployeesData()
    }

    getEmployeesData = async () => {
        const response = await fetch('http://172.17.12.141:3500/dataM/getapiM')
        console.log(response)
        const statusCode = await response.statusCode
        console.log(statusCode)
        const data = await response.json()
        console.log(data)
        const formattedEmployeeData = data.map(eachItem => ({
            SL_No: eachItem.SL_No,
            Employee_ID: eachItem.Employee_ID,
            name: eachItem.name,
            role: eachItem.role,                                                                
            noOfRequirement: eachItem.noOfRequirement,
            skillset: eachItem.skillset,
            experiance: eachItem.experiance,
            purpose: eachItem.purpose,
            ticketstatus: eachItem.ticketstatus
        }))
        this.setState({ EmployeesData: formattedEmployeeData })
        // console.log(formattedData)
    }


    render () {
        const {searchInput,EmployeesData} = this.state 
        const searchResults = EmployeesData.filter((eachUser) =>
        eachUser.name.toLowerCase().includes(searchInput.toLowerCase()))

        return (
            <>
            <Header />
            <h1>Hello You have a 1 message</h1>


            <div className='search-container-Ticket'>
                    <label className="input-label-Ticket" htmlFor="employee">
                         Search :
                    </label>
                    <input
                        type="search"
                        id="employee"
                        className="username-input-field-Ticket"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search By Employee Name only "
                    />

                </div>
                
                <div>
                    <table> 
                    <tbody>
                        <tr>
                            {/* <th>Sl.No</th> */}
                            <th>SL.No</th>
                            <th>Emp.Id</th>
                            <th>Employee FullName</th>
                            <th>Role</th>
                            <th>No.Of.Requirements</th>
                            <th>Skillset Required</th>
                            <th>Experince Required</th>
                            <th>Purpose</th>
                            <th>Ticket Status</th>
                            <th>Status Update</th>
                        </tr>
                        {searchResults.map((employee) => (
                            <tr>
                                <td>{employee.SL_No}</td>
                                <td>{employee.Employee_ID}</td>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.noOfRequirement}</td>
                                <td>{employee.skillset}</td>
                                <td>{employee.experiance}</td>
                                <td>{employee.purpose}</td>
                                <td>{employee.ticketstatus}</td>
                                <td><Link to="/TicketStatus"><button type='button' className="ticket-button">Approve/Rejected {TicketStatusApproved}</button></Link></td>
                            </tr>
                        ))}

                    </tbody>
                    </table>
                </div>
            </>
        )
    }
}