import { React, Component } from 'react';
import './index.css'
import Header from '../Header';
import { Link } from 'react-router-dom'
import axios from 'axios'
// import UserRegistration from '../UserRegistration'
import EmployeeDataEdit from '../EmployeeDataEdit';
import AddNewEmployee from '../AddNewEmployee';

import 'bootstrap/dist/css/bootstrap.css';


export default class TrainingStatus extends Component {

    //    updateUser(Eid) {
    //     alert("Employee id " + Eid + " is selected for Updating")

    //     axios.put(`http://172.17.12.41:3000/project1/put/${Eid}`).then(
    //         res => console.log("Updated!!!", res)
    //     ).catch(
    //         err => console.log(err)
    //     )

    // }
    constructor(props) {
        super(props);
      
      this.state = { searchInput: '', blogsData2 : [], }
    
    }

    deleteData(Eid,e) {
        alert("Employee ID " + Eid + " is selected for Delete")
        e.preventDefault();
        axios.delete(`http://172.17.12.112:3000/data/delete`,{ "data": { "Eid": Eid } }).then(
            res => console.log("Deleted!!!", res)
        ).catch(
            err => console.log(err)
        )
        this.getData2()
    }

  

    onChangeSearchInput = event => {
        this.setState({
            searchInput: event.target.value
        })
    }

    componentDidMount() {
        this.getData2()  
    }

    getData2 = async () => {
        const response = await fetch('http://172.17.12.112:3000/data/get')
        console.log(response)
        const statusCode = await response.statusCode
        console.log(statusCode)
        const data = await response.json()

        console.log(data)
        const formattedData1 = data.map(eachItem => ({
            Sno: eachItem.Sno,
            Eid: eachItem.Eid,
            Ename: eachItem.Ename,
            Email: eachItem.Email,
            Skillset: eachItem.Skillset,
            Trainning: eachItem.Trainning,
            TrainningStatus: eachItem.TrainningStatus
        }))
        this.setState({ blogsData2: formattedData1})
        // console.log(formattedData1)
    }

    render() {
        const { searchInput, blogsData2 } = this.state
        const searchResults = blogsData2.filter((eachUser) =>
            eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase()))
        return (

            <div>
                <Header />
                <h1 className='heading-Trainee' >Trainee Employee List </h1>
                <div className='container-for-employee'> 
                <div className='search-container'>
                    <label className="input-label-3" htmlFor="employee">
                        Employee Search :
                    </label>
                    <input
                        type="search"
                        id="email"
                        className="username-input-field-training"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search By Employee Name only"
                    />
                </div>
                <Link to="/addnewemployee"><button className='post-button'>Add New Employee {AddNewEmployee} </button></Link>
                </div>
                <div>
                    <table>

                   
                    <tbody>
                        <tr>

                            <th>S.No</th>
                            <th>Employee ID</th>
                            <th>Employee Full Name</th>
                            <th>Email</th>
                            <th>Skillset</th>
                            <th>Training</th>
                            <th>TrainingStatus</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {searchResults.map((users) => (
                            <tr>
                                <td>{users.Sno}</td>
                                <td>{users.Eid}</td>
                                <td>{users.Ename}</td>
                                <td>{users.Email}</td>
                                <td>{users.Skillset}</td>
                                <td>{users.Trainning}</td>
                                <td>{users.TrainningStatus}</td>
                                <td><Link to={"/employeeEdit/"+users.Eid}><button  type="button" class="btn btn-info" >Edit {EmployeeDataEdit}</button></Link></td>
                                <td><button type="button" class="btn btn-danger"   onClick={(e) => this.deleteData(users.Eid,e)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                     </table>

                </div>
            </div>
        )
    }
}


