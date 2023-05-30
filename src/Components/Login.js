import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { BASE_URL } from "../Api/api";

// import Error from "./quiz/Error";
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    // const {email,password} =user
    axios.post(`${BASE_URL}login`, user).then((res) => {
      alert(res.data.message);
      

      setLoginUser(res.data.user);
     navigate('/')
    });
  };

  return (
    <div className="login">
      {/* {console.log(user)} */}
      {error && navigate('/')}
      <div className="loginForm">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Your Email"
          className="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="password"
          className="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button className="loginButton" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;