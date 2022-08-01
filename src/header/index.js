import React from "react";
import image from "../images/calendarIcon.png";
import style from "./style.module.css";
import MenuBar from "../menu/index";
import PropTypes from "prop-types";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

const Header = ({ setaActivePage, toDo, allData, setAllData }) => {
  const arrowDownWardIcon = () => {
    setAllData([...allData.sort((a, b) => b.id - a.id)]);
  };

  const arrowUpWardIcon = () => {
    setAllData([...allData.sort((a, b) => a.id - b.id)]);
  };

  const deleteToDoItems = () => {
    setAllData(allData.filter((toDo) => toDo.type !== "Removed"));
  };
  return (
    <div className={style.header}>
      <div className={style.headerImageAndText}>
        <img src={image} alt="calendarImage" />
        <p>Today</p>
      </div>
      <div className={style.menuIcons}>
        <ArrowDownwardIcon onClick={arrowDownWardIcon} />
        <ArrowUpwardIcon onClick={arrowUpWardIcon} />
        <AutoDeleteIcon onClick={deleteToDoItems} />
        <MenuBar toDo={toDo} setaActivePage={setaActivePage} />
      </div>
    </div>
  );
};

Header.propTypes = {
  setaActivePage: PropTypes.func.isRequired,
  toDo: PropTypes.object.isRequired,
  allData: PropTypes.array.isRequired,
  setAllData: PropTypes.func.isRequired,
};

export default Header;
