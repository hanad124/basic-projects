import "./home.scss";
import { useState, useEffect } from "react";
import Counter from "../projects/counter/Counter";
import OntextChange from "../projects/onTextChange/OntextChange";
import TodoList from "../projects/todoList/TodoList";
import Switch from "../projects/switch/Switch";

const Home = () => {
  const [activeCounter, setActiveCounter] = useState(false);
  const [activeOnTextChange, setActiveOnTextChange] = useState(false);
  const [activeTodoList, setActiveTodoList] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(false);

  useEffect(() => {
    setActiveCounter(true);
  }, []);

  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className="tab_categories">
            <div
              className={`all category ${activeCounter ? "active" : ""} `}
              onClick={() => {
                setActiveCounter(true);
                setActiveOnTextChange(false);
                setActiveTodoList(false);
                setActiveSwitch(false);
              }}>
              Counter
            </div>
            <div
              className={`all category ${activeOnTextChange ? "active" : ""} `}
              onClick={() => {
                setActiveCounter(false);
                setActiveOnTextChange(true);
                setActiveTodoList(false);
                setActiveSwitch(false);
              }}>
              On Text Change
            </div>
            <div
              className={`all category ${activeTodoList ? "active" : ""} `}
              onClick={() => {
                setActiveCounter(false);
                setActiveOnTextChange(false);
                setActiveTodoList(true);
                setActiveSwitch(false);
              }}>
              To-do-list
            </div>
            <div
              className={`all category ${activeSwitch ? "active" : ""} `}
              onClick={() => {
                setActiveCounter(false);
                setActiveOnTextChange(false);
                setActiveTodoList(false);
                setActiveSwitch(true);
              }}>
              Switch
            </div>
          </div>

          {activeCounter ? <Counter /> : ""}
          {activeOnTextChange ? <OntextChange /> : ""}
          {activeTodoList ? <TodoList /> : ""}
          {activeSwitch ? <Switch /> : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
