import React, { useState } from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";


const CreateNewItem = ({ setAllData, allData }) => {
  const [addText, setAddText] = useState("");
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd(addText);
      setAddText("");
    }
  };

  const onAdd = (addText) => {
    if (addText !== "") {
      const addNewItem = [
        ...allData,
        {
          id: new Date().getTime(),
          text: addText,
          type: "In-Progres",
        },
      ];
      setAllData(addNewItem);
    }
  };
  return (
    <div className={style.createNewItem}>
      <button className={style.createNewItemButton}>+</button>
      <input
        onKeyDown={_handleKeyDown}
        className={style.addInput}
        type="text"
        placeholder="Create New Item"
        value={addText}
        onChange={(e) => {
          setAddText(e.target.value);
        }}
      />
    </div>
  );
};

CreateNewItem.propTypes = {
  setAllData: PropTypes.func.isRequired,
  allData: PropTypes.object.isRequired,
};

export default CreateNewItem;
