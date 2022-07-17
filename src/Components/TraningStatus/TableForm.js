import { Input } from "antd";
import React from "react";

const InputFun = (props) => {
  var defaultVal =
    props.type === "Ename"
      ? props.field.Ename
      : props.type === "Email"
      ? props.field.Email
      : props.type === "Skillset"
      ? props.field.Skillset
      : props.type === "Training"
      ? props.field.Training
      :props.type === "TriningStatus"
      ? props.field.TrainingStatus
      : null;
  const onChange = (e) => {
    if (props.type === "Ename") {
      props.field.Ename = e;
    } else if (props.type === "Email") {
      props.field.Email = e;
    } else if (props.type === "Skillset") {
      props.field.Skillset = e;
    } else if (props.type === "Training") {
      props.field.Training = e;
    } else if (props.type === "TriningStatus") {
        props.field.TriningStatus = e;
    }
    else {
      console.log(e);
    }
    console.log(props.field);
  };
  return (
    <Input
      defaultValue={defaultVal}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default InputFun;









/* 

import React, { useState} from 'react';
import { Button, Form, Input } from 'antd';



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



const EditRowData = (props) => {

    const [formEid, setformEid] = useState('')
    const [formTraining, setformTraining] = useState('')
    const [formTrainingStatus, setformTStatus] = useState('')
    const [formSkillset, setformSkill] = useState('')
    const [formEname, setformName] = useState('')
    const [formEmail, setformEmail] = useState('')

    const [form] = Form.useForm();

    function onChangeEid(event) {
        setformEid(event.target.value)
    }

    function onChangeName(event) {
        setformName(
            event.target.value
        )
    }

    function onChangeEmail(event) {
        setformEmail(event.target.value)
    }

    function handleInputChange1(event) {
        setformTraining(event.target.value);
    }

    function handleInputChange2(event) {
        setformTStatus(event.target.value);
    }
    function handleInputChange3(event) {
        setformSkill(event.target.value);
    }

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
        setformEid('')
        setformName('')
        setformEmail('')
        setformSkill('');
        setformTStatus('')
        setformTraining('')
    };

    return (
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
                <Input onChange={onChangeEid}
                    value={formEid} />
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
                <Input onChange={onChangeName}
                    value={formEname} />
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
                <Input onChange={onChangeEmail}
                    value={formEmail} />
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
                <Input onChange={handleInputChange3}
                    value={formSkillset} />
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
                <Input onChange={handleInputChange1}
                    value={formTraining} />
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
                <Input onChange={handleInputChange2}
                    value={formTrainingStatus} />
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
    )
}
export default EditRowData  */


