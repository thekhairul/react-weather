import React from "react";

const Toast = ({ toastProps }) => {
  let classes = `toast ${toastProps.visible ? "active" : ""}`;
  let message = "Oops !! Nothing found. Try something else.";
  return (
    <div className={classes}>
      <h3>{message}</h3>
    </div>
  );
};

export default Toast;
