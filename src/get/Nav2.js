import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Nav2 = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setTitle(data.title);
        setBody(data.body);
      });
  }, [id]);

  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id,
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

  if (!post) return <div>Loading...</div>;

  return (
    <div style={{ margin: "30px" }}>
      <p>
        <strong>ID:</strong> {post.id}
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
      <button
        onClick={handleUpdate}
        style={{ padding: "10px", borderRadius: "5px" }}
      >
        Update
      </button>
    </div>
  );
};

export default Nav2;
