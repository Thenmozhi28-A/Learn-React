import React from "react";
import { use, useEffect, useState } from "react";


function ChangeName() {
  const [input, setInput] = useState("");

  const [name1, setName1] = useState("THENU");

  useEffect(() => {
    console.log("name changed to:", name1);
  }, [name1]);

  const Change = () => {
    if (input.trim() !== "") {
      setName1(input);
    }
  };

  const Default = () => {
    setName1("THENU");
    setInput("");
  };

  return (
    <div className="name">
      <h5>Welcome : {name1}</h5>

      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="change">
        <button className="c1" onClick={Change}>
          Change
        </button>

        <button className="c1" onClick={Default}>
          Default
        </button>
      </div>
   
    </div>
  );
}

export default ChangeName;
