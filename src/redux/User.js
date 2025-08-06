import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "..//redux/UserSlice";

const User = () => {

  const users = useSelector((state) => state.usersInfo.users);

  console.log(users);

  const dispatch = useDispatch();

  const deleteUserInfo = (index) => {

  dispatch(deleteUser(index));
  
  };

  return (
    <div style={{padding: "20px"

    }}>
      <h1>User</h1>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
            <h3>{user.number}</h3>
            <button onClick={() => deleteUserInfo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
