import React, { useState } from "react";
import { connect } from "./service";
import "./styles/ConnectForm.css";

export default function ConnectForm({ onConnect }) {
  const [state, setState] = useState("");
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleConnect = async () => {
    await connect(credentials);
    onConnect();

    setCredentials({
        user: "",
        password: ""
    });
  };

  return (
    <div>
      <div className="form">
        <input name="user" value={credentials.user} onChange={handleChange} />
        <input
          name="password"
          value={credentials.password}
          type="password"
          onChange={handleChange}
        />
        <button onClick={handleConnect}>Подключиться</button>
      </div>
      <label className="state-label">{state}</label>
    </div>
  );
}
