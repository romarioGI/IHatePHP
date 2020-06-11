import React, { useEffect, useState } from "react";
import "./styles/Form.css";

export default function SearchForm({ params, onSearch, onClear }) {
  const [state, setState] = useState({});

  useEffect(() => {
    for (let i = 0; i < params.length; i++) {
      const element = params[i];
      setState({ ...state, ...(state[element] = "") });
    }
  }, [params]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    onSearch(state);
  };

  const handleClear = () => {
    for (let i = 0; i <= params.length; i++) {
      const element = params[i];
      setState({ ...state, ...(state[element] = "") });
    }

    onClear();
  };

  return (
    <div className="form">
      <h3>Поиск</h3>
      {params.map((param) => (
        <div className="input-group">
          <label>{param}</label>
          <input name={param} value={state[param]} onChange={handleChange} />
        </div>
      ))}
      <div className="button-group">
        <button className="button-form" onClick={handleSearch}>
          Поиск
        </button>
        <button className="button-form" onClick={handleClear}>
          Сбросить
        </button>
      </div>
    </div>
  );
}
