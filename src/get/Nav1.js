import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Nav1 = () => {
  const location = useLocation();
  const post = location.state;

  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);
  const [id, setId] = useState(post?.id);

  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: post.id,
        title,
        body,
      }),
    }) 
      .then((res) => res.json())
      .then((data) => {
        alert("Updated successfully!");
        console.log("Updated data:", data);
      });
  };

  return (
    <div style={{ margin: "30px" }}>
      <div>
        <p style={{ display: "flex", gap: "10px" }}>
          <label>
            <strong>Id:</strong>
          </label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
        </p>
        <p style={{ display: "flex", gap: "10px" }}>
          <label>
            <strong>Title:</strong>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
        </p>
        <p style={{ display: "flex", gap: "10px" }}>
          <label>
            <strong>Body:</strong>
          </label>
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
        </p>
      </div>
      <button
        onClick={handleUpdate}
        style={{ padding: "10px", borderRadius: "5px" }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Nav1;
