import React from 'react';
import { useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import './index.css'

function EmployeeDataEdit(props) { 
  const [data, setData] = useState()
  const[post,setPost] = useState()
  const [Eid, setEid] = useState()
  const [training, setTraining] = useState()
  const [trainingStatus, setTStatus] = useState()
  const [skillset, setSkill] = useState()

  // console.warn("props" + props.match.params.Eid)
  useEffect(() => {
    axios.get('http://172.17.12.112:3000/data/get1/'+ props.match.params.Eid).then((response) => {
      console.log(response);
     setData(response.data);
      setEid(response.data[0].Eid)
      setTraining(response.data[0].Trainning)
      setTStatus(response.data[0].TrainningStatus)
      setSkill(response.data[0].Skillset)
    });
  }, []);

  function handleInputChange1(event) {
   setTraining(event.target.value);
}

function handleInputChange2(event) {
  setTStatus(event.target.value);
}
function handleInputChange3(event) {
  setSkill(event.target.value);
}

let history = useHistory()
 const updatePost=(event)=>{
  event.preventDefault();
  history.push("/trainingStatus")
console.log("update function");
const post1 =  {"Eid":Eid,"Trainning":training,"TrainningStatus":trainingStatus,"Skillset":skillset} ;
console.log(post1);
  axios.put(`http://172.17.12.112:3000/data/update`,post1)
          .then(response => console.log(response))
        alert("Details Updated") 
      .catch(error => console.log(error))
 }
  console.log(data)
  console.log(post)
  console.log(setPost);
  

  return (
    <div>
      <Header />
      <div className='body-put'>
      <h3 className='heading-put'>Update Employee Details</h3>
      <form  className="put-container"> 
      <div className='form-group-put'>
      <label className='input-label-1-put'>Employee Id: </label>
      <input type="text" value={Eid} name="Eid"  disabled />
      </div>
      <div className='form-group-put'>
      <label className='input-label-1-put'>Training: </label>
      <input type="text" value={training} name="training" onChange={ handleInputChange1 } />
      </div>
      <div className='form-group-put'>
                            <label htmlFor="trainingStatus" className='input-label-1-put'>Status</label>
                            <select name="trainingStatus"  onChange={ handleInputChange2 }
                                value={trainingStatus}>
                                <option value="select">--Select--</option>
                                <option value="completed">Completed</option>
                                <option value="inprogress">In Progress</option>
                                <option value="notcompleted">Not Completed</option>
                            </select>
                        </div>
      {/* <div className='form-group-put'>
      <label className='input-label-1-put'>TrainingStatus</label>
      <input type="text" value={trainingStatus} name="trainingStatus" onChange={ handleInputChange2 } />
      </div> */}
      <div className='form-group-put'>
      <label className='input-label-1-put'>Skillset: </label>
      <input type="text" value={skillset} name="skillset" onChange={ handleInputChange3 } />
      </div>
      <div> 
      <button onClick={updatePost} className='button-put'>Update Data </button>
      </div>
      </form>
    </div>
    </div>
  )

}
export default EmployeeDataEdit





/*

 <div className='form-group-put'>
                            <label htmlFor="trainingStatus" className='input-label-1-put'>Status</label>
                            <select name="trainingStatus" onChange={this.handleChange2}
                                className=""
                                value={trainingStatus}} >
                                <option value="select">--Select--</option>
                                <option value="completed">Completed</option>
                                <option value="inprogress">In Progress</option>
                                <option value="notcompleted">Not Completed</option>
                            </select>
                        </div>

*/






















































































// import {blogsData2} from './ TrainingStatus';

// import { Redirect } from 'react-router';



/*
export default class EmployeeDataEdit extends Component{
    state = {
        Trainning :'',
        TrainningStatus:'',
        Skillset:'',
        Eid:'',
      }


      onChangeEid = event => {
        this.setState({Eid: parseInt(event.target.value)})
      }
      onChangeTrinning = event => {
        this.setState({Trainning: event.target.value})
      }
      onChangeTrainningStatus = event => {
        this.setState({TrainningStatus: event.target.value})
      }
      onChangeSkillset = event => {
          this.setState({Skillset: event.target.value})
      }


submitForm = async event => {
    event.preventDefault()
    const {Eid, Trainning, TrainningStatus,Skillset} = this.state
    const userDetails_1 = {Eid,Trainning,TrainningStatus,Skillset}
    console.log(userDetails_1)
    const url = 'http://172.17.12.112:3000/data/update'
    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails_1),
    }
    const response = await fetch(url,options)
    // console.log(response)
    const data = await response.json()
    this.setState(data)
     console.log(data)
    // window.alert("Employye Details Updated Sucessfully")
    window.alert("New Employye Details Created Sucessfully")

 
  }

  function  (params) {
    let {Eid} = useParams()
    console.log(Eid)
  }




render() {
       const {TrainningStatus} = this.state
        const {Trainning} = this.state
        const {Skillset} = this.state
        const {Eid} = this.state
   

// const { redirect } = this.state;
// if (redirect) {
//   return <Redirect to='/view' />;
// }
return(
  <> 
  <Header />
  <div className='body-put'>
  <h3 className='heading-put'>Update Employee Details</h3>
  <form onSubmit={this.submitForm} className="put-container">

  <div className='form-group-put'>
      <label className='input-label-1-put'>Employee Id: </label>
      <input type="text" value={Eid} className="input-field-put"  onChange={this.onChangeEid}  />
    </div>
      <div className='form-group-put'>
      <label className='input-label-1-put'>TrainingStatus</label>
      <input type="text" value={TrainningStatus} className="input-field-put" onChange={this.onChangeTrainningStatus} />
    </div>
    <div className='form-group-put'>
      <label className='input-label-1-put'>Training: </label>
      <input type="text" value={Trainning} className="input-field-put"  onChange={this.onChangeTrinning} />
    </div>
    <div className='form-group-put'>
      <label className='input-label-1-put'>Skillset: </label>
      <input type="text" value={Skillset} className="input-field-put" onChange={this.onChangeSkillset} />
    </div>
    <div>
      <input type="submit" value="Update" className='button-put' />
    </div>
  </form>
  </div>
  </>
)
}
}

*/



    // function updatePost() {
    //   console.log("update");
    //   const post1 =  {"Eid":Eid,"Trainning":training,"TrainningStatus":trainingStatus,"Skillset":skillset} 
    //   const headers = {   
    //  'Content-Type': 'application/json',
    //   // body: JSON.stringify(post1),
    // };
    // console.log(post1);
    //   axios.put(`http://172.17.12.112:3000/data/update`,
    //   post1)
    //       .then(response => setPost(response.data.post))
    //       console.log(post)
    //}
  /*
  useEffect( async () => {
    // console.log("useeffect");
  let result = await fetch('http://172.17.12.112:3000/data/get1/'+props.match.params.Eid)
        result = await result.json();
        setData(result)
        // .then(response => setData(response.data));
          // console.log(setData)
// empty dependency array means this effect will only run once (like componentDidMount in classes)
});*/

  // let { Eid } = useParams();
  // console.log(Eid)

  // function submitForm {event}{
//   event.preventDefault()
// }
/*
  deleteData(Eid, e) {
    alert("Employee ID " + Eid + " is selected for Update")
    e.preventDefault();
    axios.delete(`http://172.17.12.112:3000/data/update`, { "data": { "Eid": Eid } 
  })
    .then(
      ((response) => {
        setData(response.data)
      })
  
*/