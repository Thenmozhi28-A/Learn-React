import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";

const App = () => {
  const [data, setData] = useState(null);

  // GET

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handle = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) {
          setData(data);
        } else {
          alert("Post not found!");
        }
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>🚀 All Fetch Methods in One Page</h2>

      {/* GET Section */}
      <hr />
      <h3>GET Example</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {data ? (
          <div>
            <p>
              <strong>Title:</strong> {data.title}
            </p>
            <p>
              <strong>Body:</strong> {data.body}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaEdit onClick={() => handle(8)} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default App;
