import React from "react";

const Switch = ({ switchFn }) => {
  const handleSwitch = event => {
    event.target.classList.toggle("active");
    switchFn();
  };

  return <span className="switch" onClick={handleSwitch} />;
};

export default Switch;
