import React from "react";
import './Tabbar.css'

// @dev react components
import Alignment from "./Alignment";
import TextListing from "./TextListing";
import TextStyle from "./TextStyle";
import TextQuotation from "./TextQuotation";
import TextFont from "./TextFont";

export default function Tabbar() {
  return (
    <div className="tabBar">
      {/* alignment */}
      <Alignment />

      {/* text style */}
      <TextStyle />

      {/* bullets */}
      <TextListing />

      {/* quotation */}
      <TextQuotation />

      {/* font designs */}
      <TextFont />
    </div>
  );
}
