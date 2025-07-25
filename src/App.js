import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h2>🚀 All Fetch Methods in One Page</h2>

      {/* GET Section */}
      <hr />
      <h3>GET Example</h3>

      
        {data.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
             border: "1px solid #bbb",
             padding:"10px",
             marginBottom:"10px",
             borderRadius:"5px"
            }}
          >
            <div>
              <p>
                <strong>ID:</strong> {item.id}
              </p>
              <p>
                <strong>Title:</strong> {item.title}
              </p>
              <p>
                <strong>Body:</strong> {item.body}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaEdit style={{ cursor: "pointer" }} />
            </div>
          </div>
        )
      
      )}

      <br />
      <hr />
      <br />
    </div>
  );
};

export default App;
