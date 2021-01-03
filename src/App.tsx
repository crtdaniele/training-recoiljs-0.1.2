import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./todos/components/Todos";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Link to='/test'>Home</Link>
      <Todos />
    </div>
  );
}

export default App;
