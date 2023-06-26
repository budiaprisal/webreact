import * as React from "react";
import "./register.scss";
import { LoginBg } from "../../Assets";
import { Input, Password } from "../../Components";
import Save from "../../Components/atoms/save";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" />
        <p>Left</p>
      </div>
      <div className="right">
        <p className="title">Form Login</p>
        <Input />
        <Password />
        <Save/>
      </div>
    </div>
  );
};
export default Login;
