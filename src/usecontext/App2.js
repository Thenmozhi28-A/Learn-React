import React, { createContext, useState } from 'react';
import { UserContext } from './UserContext';
import Parent from './Parent';

const App2 = () => {

    const name="ZIVA";

    const user={
        
        age:22,
        city:"vengarai"
    };

    const course="Web Developer";

    const combine={name,user,course};

  return (
    <UserContext.Provider value={combine}>
        <div>
            <h1>Welcome</h1>
            <Parent />
        </div>
    </UserContext.Provider>
  )
}

export default App2;
