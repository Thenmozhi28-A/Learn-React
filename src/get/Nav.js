import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema"; 

const Nav = () => {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema), 
  });

  useEffect(() => { 
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setValue("title", data.title);
        setValue("body", data.body);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id,
        // title: data.title,
        // body: data.body,
         ...data,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <strong>ID:</strong> {post.id}
        </p>

        <p style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>
            <strong>Title:</strong>
          </label>
          <input
            {...register("title")}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          {errors.title && (
            <span style={{ color: "red" }}>{errors.title.message}</span>
          )}
        </p>

        <p style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>
            <strong>Body:</strong>
          </label>
          <input
            {...register("body")}
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />
          {errors.body && (
            <span style={{ color: "red" }}>{errors.body.message}</span>
          )}
        </p>

        <button
          type="submit"
          style={{ padding: "10px", borderRadius: "5px" }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Nav;


