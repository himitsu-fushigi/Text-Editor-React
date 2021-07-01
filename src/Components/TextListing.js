import { Button } from "@material-ui/core";
import React from "react";

// @dev material ui components
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { useDataLayerValue } from "../ContextApi/DataLayer";

export default function TextListing() {
  const activeStyle = {
    background: "#ecf0f1",
  };

  const [{ active }, dispatch] = useDataLayerValue();
  const handleChangeActiveTab = (_type, _value) => {
    // @dev handle which text listing is used in tabbar
    switch (_type) {
      case "bulleted":
        return dispatch({
          type: "ON_LIST_ACTIVATE",
          newListing: {
            ...active?.listing,
            bulleted: _value,
            numbered: _value ? false : true
          },
        });

      case "numbered":
        return dispatch({
          type: "ON_LIST_ACTIVATE",
          newListing: {
            ...active?.listing,
            bulleted: _value ? false : true,
            numbered: _value,
          },
        });
      default:
        return;
    }
  };
  return (
    <div className="tabBar__textListing">
      {/* @dev bullet list */}
      <Button style={active?.listing.bulleted === true ? activeStyle : {}} onClick={() => handleChangeActiveTab("bulleted", !active?.listing?.bulleted)}>
        <FormatListBulletedIcon />
      </Button>

      {/* @dev bullet list numbered */}
      <Button style={active?.listing.numbered === true ? activeStyle : {}} onClick={() => handleChangeActiveTab("numbered", !active?.listing?.numbered)}>
        <FormatListNumberedIcon />
      </Button>
    </div>
  );
}
