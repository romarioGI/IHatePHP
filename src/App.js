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

  return isConnected?(
    <div className="app">
      {tables.map((table) => (
          <div id={table} className="item">
            <TableContainer tableName={table} />
          </div>
        ))}
    </div>
  ):
  (
    <div className="app">
      <div className="appHeader">
        <ConnectForm onConnect={handleConnect} />
      </div>
    </div>
  );
}
