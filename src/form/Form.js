import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { printValue } from "yup";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      password: "",
      checkboxes: [],
      option: "",
    },
  });

  const onSubmit = () => {
    alert(`Login Successfull !`);
  };

  const Click = () => {
    reset({
      email: "thenu28@gmail.com",
      password: "123456",
      checkboxes: ["bike"],
      option: "Already Have Account",
    });
  };

  //   const [value, setValue] = useState("");

  //   const Click = () => {

  //     if (!value) {

  //       reset({ email: "thenu28@gmail.com", password: "123456" });
  //     }

  //     else {

  //       reset({ email: "", password: "" });
  //     }

  //     setValue(!value);
  //   };


  
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
              gap: "50px",
            }}
          >
            Welcome
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
            }}
          >
            <FaEdit onClick={Click} style={{ cursor: "pointer" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label>Email:</label>

          <input
            type="email"
            style={{ fontSize: "12px", backgroundColor: "#e5e7e9" }}
            {...register("email")}
          />

          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.email?.message}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label>Passwords:</label>

          <input
            type="password"
            style={{ fontSize: "12px", backgroundColor: "#e5e7e9" }}
            {...register("password")}
          />

          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.password?.message}
          </p>
        </div>

        <div>
          <h6>Select Any One :</h6>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <input type="checkbox" value="bike" {...register("checkboxes")} />
            <label> I have a bike</label>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <input type="checkbox" value="car" {...register("checkboxes")} />
            <label> I have a car</label>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <input type="checkbox" value="boat" {...register("checkboxes")} />
            <label> I have a boat</label>
          </div>

          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.checkboxes?.message}
          </p>
        </div>

        <div>
            <h6>Select Any One :</h6>
          <select
            style={{ padding: "5px", borderRadius: "5px",marginTop:"5px",backgroundColor:"#e5e7e9",fontSize:"12px" }}
            {...register("option")}
          >
            <option>New Account</option>
            <option>Already Have Account</option>
          </select>

          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.option?.message}
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
              cursor: "pointer",
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
