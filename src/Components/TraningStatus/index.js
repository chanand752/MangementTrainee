import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from 'axios';
// import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import InputFun from "./TableForm";
// import { Link } from 'react-router-dom';
// import EmployeeDataEdit from '../EmployeeDataEdit';
// import EditRowData from "./TableForm";
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


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  // console.log("record", record);
  const inputNode = inputType === "Ename" ? (
        <InputFun field={record} type="Ename" />
        ) : inputType === "Email" ? (
          <InputFun field={record} type="Email" />
        ) : inputType === "Skillset" ? (
          <InputFun field={record} type="Skillset" />
        ) : inputType === "Trining" ? (
          <InputFun field={record} type="Trianing" />
        ) : inputType === "TriningStatus" ? (
           <InputFun field={record} type ="TriningStatus" />
        ):
        (
    <Input />
  );

  // const inputNode = inputType === 'Ename' ? <InputNumber /> : <Input />;


  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          // name={dataIndex}
          style={{
            margin: 0,
          }}

          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}

        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};






const employeeUrl = "http://172.17.12.141:3500/dataT/getapiT";

// const managersUrl ='http://172.17.12.99:5050/rou/managers';


const TrainingStatusComp = (props) => {
 
  const [data, setData] = useState([]);
  const [searchInput,setSearchInput] = useState('')
  const [searchdata, setSearchData] = useState('')

  // put call states
  const [Eid, setEid] = useState('')
  const [Training, setTraining] = useState('')
  const [TrainingStatus, setTStatus] = useState('')
  const [Skillset, setSkill] = useState('')
  const [Ename, setName] = useState('')
  const [Email, setEmail] = useState('')


  // post Call States

  const [EmployeeID, setEmpid] = useState('')
  const [EmpTraining, setEmpTraining] = useState('')
  const [EmpTrainingStatus, setEmpTStatus] = useState('')
  const [EmpSkillset, setEmpSkill] = useState('')
  const [Empname, setEmpName] = useState('')
  const [EmpEmail, setEmpEmail] = useState('')

const [form] = Form.useForm();

const [form1] = Form.useForm();

  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.Eid === editingKey;

  const edit = (record) => {

    form.setFieldsValue({
      Eid: '',
      Ename: '',
      Email: '',
      Skillset: '',
      Training:'',
      TrainingStatus:'',
      ...record,
    });
    console.log("record", record);
    setEditingKey(record.Eid);

  };

  const cancel = () => {
    console.log("Cancel");
    setEditingKey('');
  };

  const save = async (record) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => Eid === item.Eid);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
      updatePost()
  };

  const columns = [
    {
      title: 'SL.No',
      dataIndex: 'Sno',
      width: '10%',
      editable: true,
    },
    {
      title: 'Employee ID',
      dataIndex: 'Eid',
      width: '10%',
      editable: true,
    },
    {
      title: 'Employee Name',
      dataIndex: 'Ename',
      width: '10%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      width: '10%',
      editable: true,
    },
    {
      title: 'Skillset',
      dataIndex: 'Skillset',
      width: '10%',
      editable: true,
    },
    {
      title: 'Training',
      dataIndex: 'Training',
      width: '10%',
      editable: true,
    },
    {
      title: 'TrainingStatus',
      dataIndex: 'TrainingStatus',
      width: '10%',
      editable: true,
    },
    {
      title: 'operations',
      dataIndex: 'operations',
      width: '10%',

      render: (_, record) => {

        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
                onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
      
    }


    return {
      ...col,
      onCell: (record) => ({
        record,
        // inputType:
        //   col.dataIndex === "Eid"
        //     ? "Eid"
        //     : col.dataIndex === "Ename"
        //     ? "Ename"
        //     : col.dataIndex === "Email"
        //     ? "Email"
        //     : col.dataIndex === "Skillset"
        //     ? "Skillset"
        //     : col.dataIndex === "Training"
        //     ? "Training"
        //     : col.dataIndex === "TrainingStatus"
        //     ? "TrainingStatus"
        //     : "text",
        
        inputType: col.dataIndex === 'Eid' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });


  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(employeeUrl);
    const jsonData = await response.json();
    setData(jsonData);
    setSearchData(jsonData)
  };

  
  
  const updatePost=()=>{
    console.log("update function");

    const put1 =  {"Eid":Eid,"Ename":Ename,"Email":Email, "Training":Training,"TrainingStatus":TrainingStatus,"Skillset":Skillset} ;
    console.log(put1);
      axios.put(`http://172.17.12.141:3500/dataT/putapiT`,put1)
              .then(response => console.log(response))
            // alert("Details Updated") 
          .catch(error => console.log(error))
     }
 


function postData()  {
  const userDetails_2 = {"Eid":EmployeeID,"Ename":Empname,"Email":EmpEmail, "Skillset":EmpSkillset, "Training":EmpTraining,"TrainingStatus":EmpTrainingStatus,}
console.log(userDetails_2);
  axios.post(`http://172.17.12.141:3500/dataT/postapiT`,userDetails_2)
  .then(response => console.log(response))
// alert("Details Created") 
.catch(error => console.log(error))
};


// const roleData = role.map((eachItem)=>
//   eachItem.role
// )

// console.log(roleData)



  function onChangeSearchInput(event) {
    setSearchInput(
        event.target.value
    )
}

function onChangeEid(event) {
  setEmpid(event.target.value)
}

function onChangeName(event) {
  setEmpName(
    event.target.value
  )
}

function onChangeEmail(event) {
  setEmpEmail(event.target.value)
}

function handleInputChange1(event) {
  setEmpTraining(event.target.value);
}

function handleInputChange2(event) {
 setEmpTStatus(event.target.value);
}
function handleInputChange3(event) {
 setEmpSkill(event.target.value);
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


const onFinish = (values) => {
  console.log(values);
};

const onReset = () => {
  form.resetFields();
  setEid('')
  setName('')
  setEmail('')
  setSkill('');
  setTStatus('')
  setTraining('')
};








 const searchResults = data.filter((eachUser) =>
 eachUser.Ename.toLowerCase().includes(searchInput.toLowerCase()))

  // console.log(searchResults)


  return (
    <>
  

      <Modal title="Add New Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} form={form1} name="control-hooks" onFinish={onFinish}>

      <Form.Item
        name="Eid"
        label="Employee ID:"
        
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input  onChange = {onChangeEid}
        value = {Eid} />
      </Form.Item>
     

      <Form.Item
        name="Employee Full Name"
        label="Enter Employee Full Name :"
        
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input onChange = {onChangeName}
        value = {Ename} />
      </Form.Item>


      <Form.Item
        name="Email"
        label="Enter Employee Email:"
        
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input  onChange = {onChangeEmail}
        value = {Email}/>
      </Form.Item>


      <Form.Item
        name="SkillSet"
        label="SkillSet:"
        
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input  onChange = {handleInputChange3}
        value = {Skillset}/>
      </Form.Item>
      <Form.Item
        name="Training"
        label="Training :"
       
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input   onChange = {handleInputChange1}
        value = {Training}/>
      </Form.Item>
     

      <Form.Item
        name="TrainingStatus"
        label="TrainingStatus :"
        
        rules={[
          {
            required: true,
          },
        ]} 
        >
        <Input onChange = {handleInputChange2}
        value = {TrainingStatus} />
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

     <Button type="danger"  onClick={showModal} className="button-ticket">Add New Employee </Button>

     {/* <Link to="/addnewresource"> <button className='button-ticket'>  Rise Ticket to New Resoruce {AddNewResource}</button></Link> */}


     <div>
                
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

                </div>
            </div>
            <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={searchResults}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
    </>

  );
}

export default TrainingStatusComp;

