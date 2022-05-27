import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css"

export const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="back-button-container">
        <Button onCLick={handleBackButton}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque
          ratione nam provident architecto modi autem unde tempora animi et!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
