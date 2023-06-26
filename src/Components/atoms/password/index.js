import React from "react";
import "./password.scss";

const Password = () => {
  return (
    <div className="password-wrapper">
      <p className="label">Password</p>
      <input className="password" placeholder="Form password" />
    </div>
  );
};

export default Password;
