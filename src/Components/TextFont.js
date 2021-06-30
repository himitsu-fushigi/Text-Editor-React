import React from "react";
import './TextFont.css'

export default function TextFont() {
    const fontSizes = [8,9,10,11,12,14,18,24,30,36,48,60,72,96]
    const fontFamilies = ["Lato", "Ubuntu"]

  return (
    <div className="tabBar__textFont">
        {/* @dev font sizes */}
      <select>
          {
              fontSizes?.map(size => (
                <option value={size}>{size}</option>
              ))
          }
      </select>
      
      {/* @dev font families */}
      <select style={{marginLeft: "15px"}}>
          {
              fontFamilies?.map(size => (
                <option value={size}>{size}</option>
              ))
          }
      </select>
    </div>
  );
}
