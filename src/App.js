import "./App.css";
import { use, useEffect, useState } from "react";


function App() {
  const [name, setName] = useState("");
  console.log(name);

  const [password, setPassword] = useState("");
  console.log(password);

  const [btn, setBtn] = useState("");

  const [count1, setCount1] = useState(0);

  useEffect(() => {
    if (count1 === 10) {
      console.log("You reached 10");
    } else if (count1 === 0) {
      console.log("You reached 0");
    }
  }, [count1]);

  return (
    <div className="card">
      
      <h1>Welcome</h1>
      <form className="log">
        <h4>Login Form </h4>

        <label>User Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password:</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      <button
        className="bttn"
        value={btn}
        onClick={(e) => setBtn({ uname: name, pwd: password })}
      >
        Login
      </button>

      <div className="name">
        <p>username : {btn.uname}</p>
        <p>password : {btn.pwd}</p>
      </div>

      <div className="count1">
        <button
          className="btn1"
          value="count1"
          onClick={(e) => setCount1(count1 + 1)}
        >
          +
        </button>

        <p>Number: {count1}</p>

        <button className="btn1" onClick={(e) => setCount1(count1 - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
