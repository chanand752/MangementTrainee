import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Form, Input } from 'antd';
import "./index.css";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};







const employeeUrl = "http://172.17.12.112:3009/data/get";

const managersUrl ='http://172.17.12.99:5050/rou/managers';


const TrainingStatus = () => {
 
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [role, setRole] = useState([])
  const [searchInput,setSearchInput] = useState()
  const [searchdata, setSearchData] = useState()

   console.log(searchdata);
 


  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(employeeUrl);
    const jsonData = await response.json();
    setData(jsonData);
    setSearchData(jsonData)
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
 


const roleData = role.map((eachItem)=>
  eachItem.role
)

console.log(roleData)


  function onChangeSearchInput(event) {
    setSearchInput(
        event.target.value
    )
}




const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};



const [form] = Form.useForm();

const onFinish = (values) => {
  console.log(values);
};

const onReset = () => {
  form.resetFields();
};

// const onFill = () => {
//   form.setFieldsValue({
//     note: 'Hello world!',
//     gender: 'male',
//   });

// };

//  const searchResults = data.filter((eachUser) =>
//  eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase()))
//   console.log(searchResults)


  return (
    <>
  

      <Modal title="Add New Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Eid"
        label="Employee ID:"
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>
     
      <Form.Item
        name="Employee Full Name"
        label="Enter Your Employee Id:"
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>

      <Form.Item
        name="Enter Your Name"
        label="Enter Your Name:"
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>

      <Form.Item
        name="Enter No.of Requirements"
        label="Enter No.of Requirements::"
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>
      <Form.Item
        name="SkillSet Required"
        label="SkillSet Required :"
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>
     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset} className="button-margin">
          Reset
        </Button>
      </Form.Item>
    </Form>
      </Modal>

     <Header />

     <Button type="primary"  onClick={showModal} className="button-ticket">Rise Ticket to New Resoruce </Button>

     {/* <Link to="/addnewresource"> <button className='button-ticket'>  Rise Ticket to New Resoruce {AddNewResource}</button></Link> */}


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
                        onChange={onChangeSearchInput}
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

    </>

  );
}

export default TrainingStatus;