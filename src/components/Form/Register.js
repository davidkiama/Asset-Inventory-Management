import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "../../actions/auth";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    manager: "",
    employee: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    dispatch(register(userData));
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto" }}
      onSubmit={handleSubmit}
    >
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />

      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />

      <label>Pwd 1</label>
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />

      <label>Pwd 2</label>
      <input
        type="text"
        name="password2"
        placeholder="Password2"
        value={userData.password2}
        onChange={(e) => setUserData({ ...userData, password2: e.target.value })}
      />

      <label>Manager</label>
      <input
        type="text"
        name="manager"
        placeholder="Manager"
        value={userData.manager}
        onChange={(e) => setUserData({ ...userData, manager: e.target.value })}
      />

      <label>Employee</label>
      <input
        type="text"
        name="employee"
        placeholder="Employee"
        value={userData.employee}
        onChange={(e) => setUserData({ ...userData, employee: e.target.value })}
      />

      <input type="submit" />
    </form>
  );
}

export default Register;
