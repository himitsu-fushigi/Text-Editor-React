import React from "react";

// @dev components from material ui
import { Button } from "@material-ui/core";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import { useDataLayerValue } from "../ContextApi/DataLayer";

export default function TextStyle() {
  const activeStyle = {
    background: "#ecf0f1",
  };

  const [{ active }, dispatch] = useDataLayerValue();

  const handleChangeActiveTab = (_type, _value) => {
    // @dev handle which text styling is used in tabbar
    switch (_type) {
      case "bold":
        return dispatch({
          type: "ON_FONT_STYLE_CHANGE",
          newTextStyle: {
            ...active?.textStyle,
            bold: _value,
          },
        });
      case "italic":
        return dispatch({
          type: "ON_FONT_STYLE_CHANGE",
          newTextStyle: {
            ...active?.textStyle,
            italic: _value,
          },
        });
      case "underline":
        return dispatch({
          type: "ON_FONT_STYLE_CHANGE",
          newTextStyle: {
            ...active?.textStyle,
            underline: _value,
          },
        });
      case "strikeThrough":
        return dispatch({
          type: "ON_FONT_STYLE_CHANGE",
          newTextStyle: {
            ...active?.textStyle,
            strikeThrough: _value,
          },
        });
      default:
        return;
    }
  };

  return (
    <div className="tabBar__textStyle">
      {/* @dev bold */}
      <Button
        style={active?.textStyle?.bold === true ? activeStyle : {}}
        onClick={() => handleChangeActiveTab("bold", !active?.textStyle?.bold)}
      >
        <FormatBoldIcon />
      </Button>

      {/* @dev italic */}
      <Button
        style={active?.textStyle?.italic === true ? activeStyle : {}}
        onClick={() =>
          handleChangeActiveTab("italic", !active?.textStyle?.italic)
        }
      >
        <FormatItalicIcon />
      </Button>

      {/* @dev underline */}
      <Button
        style={active?.textStyle.underline === true ? activeStyle : {}}
        onClick={() =>
          handleChangeActiveTab("underline", !active?.textStyle?.underline)
        }
      >
        <FormatUnderlinedIcon />
      </Button>

      {/* @dev strike through */}
      <Button
        style={active?.textStyle.strikeThrough === true ? activeStyle : {}}
        onClick={() =>
          handleChangeActiveTab(
            "strikeThrough",
            !active?.textStyle?.strikeThrough
          )
        }
      >
        <StrikethroughSIcon />
      </Button>
    </div>
  );
}
