import React from "react";

const PatchExample = () => {
  const handlePatch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "🔄 Updated Title by PATCH",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ PATCH Response:", data);
        alert("Title updated using PATCH!");
    });
  };
                                      
  return (
    <div>
      <h3>🛠 PATCH Example</h3>
      <button onClick={handlePatch}>Update Title</button>
    </div>
  );
};

export default PatchExample;
