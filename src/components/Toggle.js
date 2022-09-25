import React from "react";
import { useState } from "react";
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  function handleOnClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "gray";
  return (
    <button style={{ backgroundColor: color }} onClick={handleOnClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
