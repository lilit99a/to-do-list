import React from "react";
import PropTypes from "prop-types";
import style from "../footer/style.module.css";

const CountOfCompletedAndRemoved = ({ allData, toDo }) => {
  const inProgressCount = allData.filter(
    (toDo) => toDo.type === "In-Progres"
  ).length;
  const removedCount = allData.filter((toDo) => toDo.type === "Removed").length;
  const completedCount = allData.filter(
    (toDo) => toDo.type === "Completed"
  ).length;
  const myDayCount = allData.filter((toDo) => toDo.type === "MyDay").length;

  return (
    <div className={style.countofItems}>
      <p>
        {" "}
        {inProgressCount}/{allData.length} In progress
      </p>
      <p>
        {" "}
        {removedCount}/{allData.length} Removed
      </p>
      <p>
        {" "}
        {completedCount}/{allData.length} Completed
      </p>
      <p>
        {" "}
        {myDayCount}/{allData.length} My day
      </p>
    </div>
  );
};

CountOfCompletedAndRemoved.propTypes = {
  allData: PropTypes.array.isRequired,
  toDo: PropTypes.object.isRequired,
};

export default CountOfCompletedAndRemoved;
