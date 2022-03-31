import { React, Component } from 'react';
import { Link } from 'react-router-dom';
// import Axios from 'axios';
import './index.css'
import Header from '../Header';
import AddNewResource from '../AddNewResource';
import 'bootstrap/dist/css/bootstrap.css';


export default class EmployeeData extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: '', blogsData2: [], MasterChecked: false, SelectedList: [], roleData: [] };

    }

    // Select/ UnSelect Table rows
    onMasterCheck(e) {
        let tempList = this.state.blogsData2;
        // Check/ UnCheck All Items
     
        tempList.map((users) => (users.selected = e.target.checked));

        //Update State
        this.setState({
            MasterChecked: e.target.checked,
            blogsData2: tempList,
            SelectedList: this.state.blogs.filter((e) => e.selected),
        });
    }


    // Update List Item's state and Master Checkbox State
    onItemCheck(e, item) {
        let tempList = this.state.blogsData2;
        tempList.map((users) => {
            if (users.id === item.id) {
                users.selected = e.target.checked;
            }
            return users;
        });

        //To Control Master Checkbox State
        const totalItems = this.state.blogsData2.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // Update State
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            blogsData2: tempList,
            SelectedList: this.state.blogsData2.filter((e) => e.selected),
        });
    }

    // Event to get selected rows(Optional)
    getSelectedRows() {
        this.setState({
            SelectedList: this.state.blogsData2.filter((e) => e.selected),
        });
    }

    onChangeSearchInput = event => {
        this.setState({
            searchInput: event.target.value
        })
    }

    componentDidMount() {
        this.getData()
        this.getRoleBasedData()
    }

    getData = async () => {
        const response = await fetch('http://172.17.12.112:3333/data/get')
        //console.log(response)
        const data = await response.json()
        //console.log(data)
        const formattedData1 = data.map(eachItem => ({
            id: eachItem.id,
            Ename: eachItem.Ename,
            Eid: eachItem.Eid,
            Email: eachItem.Email,
            Skillset: eachItem.Skillset,
            experiance: eachItem.experiance,
            Status: eachItem.Status,
            Practise: eachItem.Practise
        }))
        this.setState({ blogsData2: formattedData1, })
        // console.log(formattedData)
    }
    
   getRoleBasedData = async () => {
    const response = await fetch('http://172.17.12.99:5000/rou/managers')
    //console.log(response)
    const data1 = await response.json()
    console.log(data1)
   const  mangersData = data1.map(eacItem1 => ({
        role: eacItem1.role,
    }))
      
   this.setState({roleData :mangersData })
   
   }
  
 

    render() {
        const { searchInput, blogsData2,roleData} = this.state
         const searchResults = blogsData2.filter((eachUser) =>
        eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase()))
      
       
 
        let message

        if(roleData !== "HR") {
            // message = <Link to="/addnewresource"><button className='button-ticket'>Rise Ticket to New Resoruce {AddNewResource}</button></Link>
            
            message =<Link to="/addnewresource"><button className='button-ticket'>Rise Ticket to New Resoruce {AddNewResource}</button></Link>
        }

        else
         {
            message ="Hai"
        }

         //{role === "Manager" && <Link to="/addnewresource"> <button className='button-ticket'>Rise Ticket to New Resoruce {AddNewResource}</button></Link>}
        
        //console.log(role,"HAi")
        // var Handlechange = e => {
        //     this.setState({role: this.state.role})
        // }
      const role =JSON.stringify(roleData) ;
    //  console.log(object.values roleData)
    //  console.log(role === 'HR' ? 'Manager':'Hai')

  
         //{this.state.role === "Manager" && <Link to="/addnewresource"> <button className='button-ticket'>Rise Ticket to New Resoruce {AddNewResource}</button></Link>}
          
        //  this.state.role  && <div>Hai</div>

        // eachUser === searchInput )

        return (
            <>
                <Header />
               <div>  
            {message}
                   
               {/* <button onClick={Handlechange}>{role ?'Hide':'Show'}</button> */}
                {/* {role && <Link to="/addnewresource"> <button className='button-ticket'>  Rise Ticket to New Resoruce {AddNewResource}</button></Link>} */}
            </div>
                <div className='search-container-1'>
                    <label className="input-label-3" htmlFor="employee">
                        Employee Search :
                    </label>
                    <input
                        type="search"
                        id="employee"
                        className="username-input-field-search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                        placeholder="Search By Employee Name only "
                    />

                </div>

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th scope="col"> <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={this.state.MasterChecked}
                                    // id="mastercheck"
                                    // onChange={(e) => this.onMasterCheck(e)}
                                /></th>

                                <th scope="col">S.No</th>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Skillset</th>
                                <th scope="col">Experince</th>
                                <th scope="col">Status</th>
                                <th scope="col">Practise Team</th>
                            </tr>
                            {searchResults.map((users) => (
                                <tr className={users.selected ? "selected" : ""}>
                                    <th scope="row"><input type="checkbox" className='checkbox' checked={users.selected}
                                        id="rowcheck{users.id}"
                                        onChange={(e) => this.onItemCheck(e, users)} /></th>
                                    <td> {users.id}</td>
                                    <td>{users.Eid}</td>
                                    <td>{users.Ename}</td>
                                    <td>{users.Email}</td>
                                    <td>{users.Skillset}</td>
                                    <td>{users.experiance}</td>
                                    <td>{users.Status}</td>
                                    <td>{users.Practise}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
              className="btn btn-primary m-3  margin"
              onClick={() => this.getSelectedRows()}
            >
              Get Selected Items {this.state.SelectedList.length} 
            </button>
            {/* <div className="row">
              <b>All Row Items:</b>
              <code>{JSON.stringify(this.state.blogsData2)}</code>
            </div> */}
            <div className="row m-3" >
              <b>Selected Row Items(Click Button To Get):</b>
              <code className=" m-2" >{JSON.stringify(this.state.SelectedList)}</code>
            </div>
                </div>

            </>
        )
    }
}
