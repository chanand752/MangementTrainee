import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Form, Input } from 'antd';
import "./index.css";
const { TextArea } = Input;

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



const employeeUrl = "http://172.17.12.141:3500/dataE/getapiE";
const managersUrl ='http://172.17.12.99:5050/rou/managers';


const NewTableData = () => {
 
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [role, setRole] = useState()
  const [searchInput,setSearchInput] = useState('')
  const [searchdata, setSearchData] = useState()
  const [Employee_ID, setId] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [noOfRequirement, setNo_of_requirement] = useState()
  const [skillset, setSkillset] = useState()
  const [experiance, setExperiance] = useState()
  const [purpose, SetPurpose] = useState()

  function handleInputChange1(event) {
    setId(event.target.value);
 }

  function handleInputChange2(event) {
    setName(event.target.value);
 }
function handleInputChangeRole(event) {
  setRole(event.target.value)
}

 function handleInputChange3(event) {
  setEmail(event.target.value);
}
 function handleInputChange4(event) {
   setNo_of_requirement(event.target.value);
 }
 function handleInputChange5(event) {
   setSkillset(event.target.value);
 }

 function handleInputChange7(event) {
  setExperiance(event.target.value);
}

 function handleInputChange6(event) {
  SetPurpose(event.target.value);
}


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
  // getMangersDataFetch();
}, []);

// const getMangersDataFetch = async () => {
//   const response = await fetch(managersUrl);
//   const jsonData1 = await response.json();
//   console.log(jsonData1)
//   setData1(jsonData1);
//    setRole(jsonData1)
// };
 


// const roleData = role.map((eachItem)=>
//   eachItem.role
// )

// console.log(roleData)


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


const onChange = (e) => {
  console.log('Change:', e.target.value);
};
// const onFill = () => {
//   form.setFieldsValue({
//     note: 'Hello world!',
//     gender: 'male',
//   });

// };

//  const searchResults = data.filter((eachUser) =>
//  eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase())|| eachUser.skillset.toLowerCase().includes(searchInput.toLowerCase()))

 const searchResults= data.filter(eachUser=> eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase()))

//   console.log(searchResults)


function postData()  {
  const userDetails_2 = {Employee_ID,name,role,noOfRequirement,skillset,experiance,purpose}
console.log(userDetails_2);
  axios.post(`http://172.17.12.141:3500/dataM/postapiM`,userDetails_2)
  .then(response => console.log(response))
// alert("Details Updated") 
.catch(error => console.log(error))
};



  return (
    <>
  

      <Modal title="Rise Ticket For New Resource" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Eid"
        label="Employee ID:"
        value={Employee_ID}
        onChange={ handleInputChange1 }
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
        label="Enter Your Full Name:"
        value={name}
        onChange={ handleInputChange2}
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>

      <Form.Item
        name="Email"
        label="Email :"
        value={email}
        onChange={ handleInputChange3}
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        label="Enter Your Role :"
        value={role}
        onChange={handleInputChangeRole}
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
        label="Enter No.of Requirements:"
        value={noOfRequirement}
        onChange={ handleInputChange4}
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
        value={skillset}
        onChange={ handleInputChange5}
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>

      <Form.Item
        name="experiance"
        label=" Experiance Required :"
        value={experiance}
        onChange={ handleInputChange7}
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input />
      </Form.Item>
      
      <Form.Item 
       name="comments"
       label="comments :"
       value={purpose}
       onChange={ handleInputChange6}
       rules={[
         {
           required: true,
         },
       ]} 
       >
      <TextArea showCount maxLength={100} onChange={onChange} />
      </Form.Item>
     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={postData}>
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
      
             {searchResults.map((users) => (
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