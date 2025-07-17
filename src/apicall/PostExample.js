import React, { useState } from "react";

const PostExample = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: name }), 
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Posted Data:", data);
        alert("Data Sent Successfully!");
      });
  };

  return (
    <div>
      <h3>POST Example</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default PostExample;
