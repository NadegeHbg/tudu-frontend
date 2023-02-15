import React from "react";
import { useForm } from "react-hook-form";
import { HandleLogin } from "../../events/axiosGlobal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useNavigate();
  const HandleLogin = async (data) => {
    try {
      console.log(data, "axios global login");
      const response = await axios.post("/user/login", data);
      const resStatus = response.status;
      const resData = response.data;
      console.log(response, "login post request");

      Cookies.set("email", resData.email, { path: "/" });
      Cookies.set("id", resData.id, { path: "/" });
      document.cookie = `token=${resData.token}`;
      // document.cookie = `email=${resData.email}`

      location("/dashboard");
    } catch (err) {
      const errStatus = err.response.status;
      alert(err.response.data);
    }
  };
  const onSubmit = async (data = {}) => {
    HandleLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Email
        <input type="email" required name="email" {...register("email")} />
      </label>
      <label htmlFor="password">
        {" "}
        Password
        <input
          type="Password"
          required
          name="password"
          {...register("password")}
        />
      </label>
      <input type="Submit" name="Submit" defaultValue="Sign in" />
    </form>
  );
}
