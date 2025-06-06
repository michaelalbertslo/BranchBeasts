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

console.log("Login.jsx message:", message);
return (
  <div className="flex items-center justify-center min-h-screen">
    <form className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#C0F0E8] via-transparent to-[#C0F0E8] shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 p-3">
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
          className="w-full bg-gradient-to-br from-[#daffa0] via-transparent to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 rounded px-3 py-2 focus:outline-none focus:ring"
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
          className="w-full bg-gradient-to-br from-[#daffa0] via-transparent to-[#daffa0] shadow-glass shadow-2xl backdrop-blur-sm border border-white/50 rounded px-3 py-2 focus:outline-none focus:ring"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={submitForm}
          className="text-black font-bold w-full bg-gradient-to-br from-blue-300 via-blue-300 to-blue-400 shadow-glass shadow-2xl backdrop-blur-sm border border-white/5 py-1 px-4 transition hover:scale-105"
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
