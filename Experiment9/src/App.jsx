import React, { useState, useEffect } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [users, setUsers] = useState([]);

  // API Data
  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setApiUsers(data))
      .catch(error => console.log(error));

  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();

    let formErrors = {};

    if (!name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!email.includes("@")) {
      formErrors.email = "Enter a valid email";
    }

    if (password.length < 6) {
      formErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {

      const newUser = {
        name,
        email
      };

      setUsers([...users, newUser]);

      setSuccess("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");

      setErrors({});
    }
  };

  return (
    <div className="container">

      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)}
        />
        <p className="error">{errors.name}</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)}
        />
        <p className="error">{errors.password}</p>

        <button type="submit">
          Register
        </button>

      </form>

      <p className="success">{success}</p>

      {users.length > 0 && (
        <div className="apiData">

          <h3>Registered Users</h3>

          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>

        </div>
      )}

      <div className="apiData">

        <h3>Users Fetched from API</h3>

        <ul>
          {apiUsers.slice(0, 5).map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;