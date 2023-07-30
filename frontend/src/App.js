// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import ToDo from "./components/ToDo";

function App() {

  const [toDo, setToDo] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDo..." />

          <div className="add">
            Add
          </div>
        </div>
        <div className="list">
            <ToDo text="hi"/>
        </div>
      </div>
    </div>
  );
}

export default App;
