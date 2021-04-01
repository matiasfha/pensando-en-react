import React from "react";
import Sidebar from "./components/Sidebar";

const Header = () => {
  return (
    <div className="header">
      <h2>Inicio</h2>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Sidebar />
      <header />
    </div>
  );
}

export default App;
