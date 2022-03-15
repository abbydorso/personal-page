import logo from "./logo.svg";
import "./App.css";
import github from "./img/github.svg";
import linkedIn from "./img/linkedin.svg";
import React, { useState } from "react";
// import Item from './components/Item';
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import CustomizedSwitches from "./components/Switch";

function App() {
  const [list, setList] = useState([
    "jagtester",
    "open source",
    "about me",
    "interests/hobbies",
  ]);

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (destination.index === source.index) return null;

    // Move the item within the list
    // Start by making a new list without the dragged item
    const newList = list.filter((_, idx) => idx !== source.index);

    // Then insert the item at the right location
    newList.splice(destination.index, 0, list[source.index]);

    // Update the list
    setList(newList);
  };
  return (
    <>
      <div className='App'>
        <h1>Abigail Dorso</h1>
        <CustomizedSwitches />
        <a href={"https://github.com/abbydorso"}>
          <img src={github} height={"40px"} width={"auto"} />
        </a>
        <a href={"https://www.linkedin.com/in/abigaildorso/"}>
          <img src={linkedIn} height={"40px"} width={"auto"} />
        </a>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            margin: "24px auto",
            width: "80%",
            gap: "8px",
          }}
        >
          <Column list={list} />
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
