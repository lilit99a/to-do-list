import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import navBarImage from "../images/ellipsis.png";
import PropTypes from "prop-types";

const MenuBar = ({
  setaActivePage,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={navBarImage} alt="nav-menu" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setaActivePage("Completed");
          }}
        >
          Completed
        </MenuItem>
        <MenuItem
          onClick={() => {
            setaActivePage("In-Progres");
          }}
        >
          In Progress
        </MenuItem>
        <MenuItem
          onClick={() => {
            setaActivePage("Removed");
          }}
        >
          Removed
        </MenuItem>
        <MenuItem
        onClick={() => {
          setaActivePage("MyDay")
        }}
        > My Day </MenuItem>
      </Menu>
    </div>
  );
};

MenuBar.propTypes = {
  setaActivePage: PropTypes.func.isRequired,
};
export default MenuBar;
