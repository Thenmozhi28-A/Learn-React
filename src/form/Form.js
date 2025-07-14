import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema";
import { useForm } from "react-hook-form";
import { FaEdit } from 'react-icons/fa';


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmit = () => {
    alert(`Login Successfull !`);
  };

  const handleClick = () => {
  reset({ email: "thenu28@gmail.com", password: "123456" }); 
};

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "10px",
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", gap: "10px", flexDirection: "column" }}
      >
        <div>

        <h3
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            gap:"50px"
          }}
        >
          Welcome
        </h3>

        <div style={{display:"flex",alignItems:"end",justifyContent:"end"}}>

         <FaEdit onClick={handleClick}style={{ cursor: "pointer"} }/>

         </div>

        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label>Email:</label>

          <input type="email" {...register("email")} />

          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.email?.message}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label>Password:</label>

          <input type="password" {...register("password")} />

          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.password?.message}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
