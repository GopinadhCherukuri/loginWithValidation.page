import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState("");
  const [pass, setPass] = useState("");
  const [inpdirty, setInpdirty] = useState(false);
  const [passdirty, setPassdirty] = useState(false);

  const handleSubmit = () => {
    setInpdirty(true);
    setPassdirty(true);
  };

  return (
    <div className="container">
      <div className="loginbox">
        <h1>Login</h1>
        <p>Email:</p>
        <input
          type="text"
          name="username"
          placeholder="Enter User Email..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        {inpdirty && !data.length && <span>Email is Required</span>}
        {!data.includes("@") && data.length > 0 && (
          <span>Email is invalid</span>
        )}
        <p>password:</p>
        <input
          type="password"
          name="password"
          placeholder="Enter Password..."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {passdirty && !pass.length && <span>Password is Required</span>}
        {pass.length < 10 && pass.length > 0 ? (
          <span>Password must be 10 characters</span>
        ) : null}
        <input type="submit" value="login" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
