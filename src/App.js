import React, { useState } from "react";

import "./App.css";
import Tasks from "./components/Tasks";


export default function App() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: true,
    },
    {
      id: 2,
      title: "Ler",
      completed: false,
    }
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>;
    </>
  );
}
