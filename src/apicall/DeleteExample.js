import React from "react";

const DeleteExample = () => {
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
    <div>
      <h3>DELETE Example</h3>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default DeleteExample;
