import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUsers} from './UserSlice';

const Home = () => {

    const dispatch = useDispatch()

    const [fromInput , setFromInput]=useState({
      name:"",
      age:"",
      email:"",
      number:"",  
    });

    const handelChange=(event)=>{
        const {name,value}=event.target;
        // console.log(name,value);
 
        setFromInput((currInput)=>{
            return {
                ...currInput,
                [name]:value,
            };
        });
    };

    // console.log(fromInput);

    const addUser=(event)=>{
        event.preventDefault();
        dispatch(setUsers(fromInput));
    }

  return (
    <div style={{ padding: "20px"}}>
        <from>
            <label>Name</label>
            <br/>
            <input name='name' type="text" value={fromInput.name} onChange={handelChange} />
            <br/>
              <label>Age</label>
            <br/>
            <input name='age' type="text" value={fromInput.age} onChange={handelChange}/>
            <br/>
              <label>Email</label>
            <br/>
            <input name='email' type="text" value={fromInput.email} onChange={handelChange}/>
            <br/>
              <label>Number</label>
            <br/>
            <input name='number' type="text" value={fromInput.number} onChange={handelChange}/>
            <br/>
            <button style={{marginTop:"20px",padding:"5px",width:"100px"}} onClick={addUser}>Add</button>
       </from>
    </div>
  )
}

export default Home
