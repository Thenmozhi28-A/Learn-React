import React, { useEffect, useState } from "react";

const FetchGet = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1") 
      .then((res) => res.json()) 
      .then((result) => setData(result)); 
  }, []);

  return (
    <div> 
      <h3>Simple GET Example</h3>
      {data ? (
        <div>
          <p>📌 Title: {data.title}</p>
          <p>📝 Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchGet;
