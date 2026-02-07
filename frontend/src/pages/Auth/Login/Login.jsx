import React from "react";
import LoginForm from "./LoginForm"
import useLogin from "./UseLogin";



const Login = () => {
  
 const {handleSubmit,loading}=useLogin();
  return (<LoginForm onSubmit={handleSubmit} loading={loading} />)
};

export default Login;
