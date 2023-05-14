import { useState } from "react";
import Counter from "./projects/counter/Counter";
import OntextChange from "./projects/onTextChange/OntextChange";
import TodoList from "./projects/todoList/TodoList";
import Switch from "./projects/switch/Switch";
import Home from "./Home/Home";
import "./index.scss";


function App() {
  return (
    <>
      <div className="App">
       <Home />
      </div>
    </>
  );
}

export default App;
