import React, { useState } from "react";

const PutExample = () => {
  const [title, setTitle] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: 1, 
        title: title,
        body: "This is updated content",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Updated Data:", data);
        alert("Data Updated Successfully!");
      });
  };

  return (
    <div>
      <h3>PUT Example</h3>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Update title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default PutExample;
