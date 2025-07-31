import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [post, setPost] = useState("");
  const [put, setPut] = useState("");

  // GET 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // POST

  const handlePost = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: post }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ POST:", data);
        alert("Posted Successfully!");
      });
  };

  // PUT 
  
  const handlePut = (e) => {
    e.preventDefault();
    
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: put,
        body: "Updated Content",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ PUT:", data);
        alert("Updated Successfully!");
      });
  };

  // DELETE 
  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE", 
    })
      .then((res) => {
        if (res.status === 200) {
          alert("✅ Data Deleted Successfully");
        } else {
          alert("❌ Failed to Delete");
        }
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚀 All Fetch Methods in One Page</h2>

      {/* GET Section */}
      <hr />
      <h3>GET Example</h3>
      {data ? (
        <div>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* POST Section */}
      <hr />
      <h3>POST Example</h3>
      <form onSubmit={handlePost} style={{display:"flex", gap:"5px"}}>
        <input
          type="text"
          placeholder="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          style={{padding:"5px", borderRadius:"5px"}}
        />
        <button type="submit" style={{padding:"10px",borderRadius:"5px"}}>Send</button>
      </form>

      {/* PUT Section */}
      <hr />
      <h3>PUT Example</h3>
      <form onSubmit={handlePut} style={{display:"flex", gap:"5px"}} >
        <input
          type="text"
          placeholder="text"
          value={put}
          onChange={(e) => setPut(e.target.value)}
          style={{padding:"5px", borderRadius:"5px"}}
        />
        <button type="submit"style={{padding:"10px",borderRadius:"5px"}}>Update</button>
      </form>

      {/* DELETE Section */}
      <hr />
      <h3>DELETE Example</h3>
      <button onClick={handleDelete}style={{padding:"10px",borderRadius:"5px"}}>Delete Post</button>
    </div>
  );
};

export default App;