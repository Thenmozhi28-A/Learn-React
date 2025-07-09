import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const GrandChild = () => {

    const {name,user,course}=useContext(UserContext);
    
    const stu =["Thenu","Avanthika","Mahes"];

  return (
    <div>
      <h4>Hello {name}!</h4>
      <p>Your Age is {user.age}</p>
      <p>You Live in {user.city}</p>
      <p>You Learn {course}</p>

      {stu.map((item)=>(
        <h5>Hello {item}</h5>
      ))}
      
    </div>
  )
}

export default GrandChild;
