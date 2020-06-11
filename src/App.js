import React, { useState } from "react";
import TableContainer from "./TableContainer";
import ConnectForm from "./ConnectForm";
import "./styles/App.css";

const tables = ["Здание", "Клиент", "Объявление", "Помещение", "Сделка"];

export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(false);
    setIsConnected(true);
  };

  return (
    <div className="app">
      <div className="appHeader">
        <div>
          {tables.map((table) => (
            <div>
              <a href={"#" + table}>{table}</a>
            </div>
          ))}
        </div>
        <ConnectForm onConnect={handleConnect} />
      </div>
      {isConnected &&
        tables.map((table) => (
          <div id={table} className="item">
            <TableContainer tableName={table} />
          </div>
        ))}
    </div>
  );
}
