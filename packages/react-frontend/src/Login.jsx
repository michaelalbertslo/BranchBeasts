import React, { useState } from "react";

function Login({ handleSubmit, buttonLabel = "Log In" }) {
  const [creds, setCreds] = useState({
    username: "",
    pwd: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCreds((prevCreds) => ({ ...prevCreds, [name]: value }));
  }

  function submitForm() {
    handleSubmit(creds);
    setCreds({ username: "", pwd: "" });
  }

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={creds.username}
        onChange={handleChange}
      />
      <label htmlFor="pwd">Password</label>
      <input
        type="password"
        name="pwd"
        id="pwd"
        value={creds.pwd}
        onChange={handleChange}
      />
      <button type="button" onClick={submitForm}>
        {buttonLabel}
      </button>
    </form>
  );
}

export default Login;
