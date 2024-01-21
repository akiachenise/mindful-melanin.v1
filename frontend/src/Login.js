import React, { useState } from "react";

function Login() {
  // State to store each input field value
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //State to manage the loading screen and it's visibility
  const [loading, setLoading] = useState(false);

  //Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); //Activate the loading screen

    try {
      //POST request to the backend login endpoint for authentication

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
    } finally {
      setLoading(false); // Deactivate loading screen
    }
  };

  // Display loading screen if 'loading' is true
  if (loading) {
    return <div>Loading...</div>;
  }

  // Login form with username and password fields
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
