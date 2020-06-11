import React from "react";
import TableContainer from "./TableContainer";
import "./styles/App.css";

const tables = ["Здание", "Клиент", "Объявление", "Помещение", "Сделка"];

export default function App() {
  return (
    <div className="app">
      {tables.map((table) => (
        <div>
          <a href={"#" + table}>{table}</a>
        </div>
      ))}
      {tables.map((table) => (
        <div id={table} className="item">
          <TableContainer tableName={table} />
        </div>
      ))}
    </div>
  );
}