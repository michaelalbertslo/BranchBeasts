import React, { useState } from "react";

function Login({ handleSubmit, buttonLabel = "Log In", message }) {
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
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{buttonLabel}</h2>

      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={creds.username}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="pwd" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          value={creds.pwd}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={submitForm}
          className="bg-white text-black font-bold py-2 px-2 rounded w-full cursor-pointer border-2 border-black"
        >
          {buttonLabel}
        </button>

      </div>
      {message && (
        <p className="mt-4 text-center text-red-600 font-medium">
          {message}
        </p>
      )}
    </form>
  </div>
);

}

export default Login;
