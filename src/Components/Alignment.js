import React from "react";

import { useDataLayerValue } from "../ContextApi/DataLayer";

// @dev material ui components
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import { Button } from "@material-ui/core";

export default function Alignment() {
  const activeStyle = {
    background: "#ecf0f1",
  };

  const [{ active }, dispatch] = useDataLayerValue();

  const handleChangeAlignment = (e) => {
    dispatch({
      type: "ON_ALIGNMENT_CHANGE",
      newAlignment: e
    })
  }
  return (
    <div className="tabBar__alignment">
      {/* @dev left align */}
      <Button style={active?.alignment === "left" ? activeStyle : {}} onClick={() => handleChangeAlignment("left")}>
        <FormatAlignLeftIcon />
      </Button>

      {/* @dev center align */}
      <Button style={active?.alignment === "center" ? activeStyle : {}} onClick={() => handleChangeAlignment("center")}>
        <FormatAlignCenterIcon />
      </Button>

      {/* @dev justify align */}
      <Button style={active?.alignment === "justify" ? activeStyle : {}} onClick={() => handleChangeAlignment("align")}>
        <FormatAlignJustifyIcon />
      </Button>

      {/* @dev right align */}
      <Button style={active?.alignment === "right" ? activeStyle : {}} onClick={() => handleChangeAlignment("right")}>
        <FormatAlignRightIcon />
      </Button>
    </div>
  );
}
