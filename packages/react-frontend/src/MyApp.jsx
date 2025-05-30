import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Closet from "./Closet";
import NavBar from "./NavBar";
import Outfits from "./Outfits";
import OutfitGen from "./OutfitGen";
import Upload from "./Upload";
import View from "./View";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import { API_BASE_URL } from "./azure";


function MyApp() {
  const INVALID_TOKEN = "INVALID_TOKEN";
  const [token, setToken] = useState(INVALID_TOKEN);
  const [message, setMessage] = useState("");

  const location = useLocation();
  
  useEffect(() => {
    setMessage(""); // clear the message when the path changes
  }, [location.pathname]);


  function loginUser(creds) {
    fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creds)
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setToken(data.token);
            setMessage("Login successful!");
          });
        } else {
          setMessage(`Login failed: ${res.status}`);
        }
      })
      .catch((err) => {
        setMessage(`Login error: ${err.message}`);
      });
  }

  function addAuthHeader(headers = {}) {
  if (token === INVALID_TOKEN) return headers;

  return {
    ...headers,
    Authorization: `Bearer ${token}`
  };
}

function signupUser(creds) {
  fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(creds)
  })
    .then((res) => {
      if (res.status === 201) {
        res.json().then((data) => {
          setToken(data.token);
          setMessage(`Signup successful for ${creds.username}`);
        });
      } else {
        setMessage(`Signup failed: ${res.status}`);
      }
    })
    .catch((err) => {
      setMessage(`Signup error: ${err.message}`);
    });
}



  return (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Closet addAuthHeader={addAuthHeader} />} />
      <Route path="/outfits" element={<Outfits />} />
      <Route path="/outfit-gen" element={<OutfitGen />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/view" element={<View />} />
      <Route path="/login" element={<Login handleSubmit={loginUser} />} />
      <Route path="/signup" element={<Login handleSubmit={signupUser} buttonLabel="Sign Up" />} />
    </Routes>
    <p>{message}</p>
  </div>
);

}


export default MyApp;