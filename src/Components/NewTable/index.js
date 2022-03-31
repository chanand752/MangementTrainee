import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddNewResource from '../AddNewResource';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

const employeeUrl = "http://172.17.12.112:3333/data/get";
const managersUrl ='http://172.17.12.99:5000/rou/managers';
function NewTableData() {

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [role, setRole] = useState([])
  const [searchInput,setSearchInput] = useState()

  // const searchResults = userData.filter((eachUser) =>
  //   eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase()))

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(employeeUrl);
    const jsonData = await response.json();
    setData(jsonData);
  };

  
  
useEffect(() => {
  getMangersDataFetch();
}, []);

const getMangersDataFetch = async () => {
  const response = await fetch(managersUrl);
  const jsonData1 = await response.json();
  console.log(jsonData1)
  setData1(jsonData1);
   setRole(jsonData1)
};
 

/*
const filtered = items.filter((type, index) => items.indexOf(type) === index)

*/
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

*/


// var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];


// if(roleData.indexOf("Manager") !== -1){
//     console.log("Value exists!")
// } else{
//     console.log("Value does not exists!")
// }







const roleData = role.map((eachItem)=>
  eachItem.role
)

console.log(roleData)


  function onChangeSearchInput(event) {
    setSearchInput(
        event.target.value
    )
}


var a = 'anand'
console.log(a)

  return (
    <>


     <Header />
     {roleData.indexOf("Manager")!== -1 && <Link to="/addnewresource"> <button className='button-ticket'>Rise Ticket to New Resoruce {AddNewResource}</button></Link>}
     {/* <Link to="/addnewresource"> <button className='button-ticket'>  Rise Ticket to New Resoruce {AddNewResource}</button></Link> */}
      <div className='search-container-1'>
        <label className="input-label-3" htmlFor="employee">
          Employee Search :
        </label>
        <input
          type="search"
          id="employee"
          className="username-input-field-search"
          value={searchInput}
          onChange={onChangeSearchInput}
          placeholder="Search By Employee Name only "
        />

      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <th> <input
                type="checkbox"
                className="checkbox"
              /></th>

              <th>S.No</th>
              <th>Employee ID</th>
              <th>Employee Full Name</th>
              <th>Email</th>
              <th>Skillset</th>
              <th>Experince</th>
              <th>Status</th>
              <th>Practise Team</th>
            </tr>
            {data.map((users) => (
              <tr>
                <th><input type="checkbox" className='checkbox'/></th>
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
      </div>

    </>

  );
}

export default NewTableData;