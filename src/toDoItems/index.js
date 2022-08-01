import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "../toDoItems/style.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ToDoItems = ({ toDo, setAllData, allData }) => {
  const [editText, setEditText] = useState("");

  useEffect(() => {
    setEditText(toDo.text);
  }, [toDo]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const currentItem = (type) => {
    const currentItem = allData.map((e) => {
      if (e.id === toDo.id) {
        return { ...e, type };
      }
      return e;
    });
    console.log(currentItem, "currentItem")
    setAllData(currentItem);
    console.log(allData, "allData")
  };

  const changeMyDayTaskInProgress = () => {
    setTimeout(() => {
      setAllData(
        allData.map((e) => {
          console.log(e.type, "e.type")
          if (e.type === "MyDay") {
            e.type = "In-Progres";
            return e;
          } else {
            return e;
          }
        })
      );
    }, 10000);
  };

  // const changeMyDayTaskInProgress = () => {
  //    setTimeout(() => {
  //      setAllData(allData.filter((toDo) => toDo.type !== "MyDay"))
  //    }, 10000)
  // }

  return (
    <div className={style.toDoItems}>
      <input
        className={style.checkedInput}
        type="checkbox"
        checked={toDo?.isCompleted}
        onClick={() => {
          currentItem("Completed");
        }}
      />
      <input
        type="text"
        className={style.toDoTexts}
        defaultValue={toDo.text}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button
        className={style.deleteButton}
        onClick={() => currentItem("Removed")}
      >
        x
      </button>
      <CalendarMonthIcon
        onClick={() => {
          currentItem("MyDay");
          changeMyDayTaskInProgress();
        }}
      />
    </div>
  );
};

ToDoItems.propTypes = {
  toDo: PropTypes.object.isRequired,
  setAllData: PropTypes.func.isRequired,
  allData: PropTypes.array.isRequired,
};

export default ToDoItems;
