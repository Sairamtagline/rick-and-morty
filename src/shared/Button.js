import React from "react";
import { Button } from "reactstrap";

const CustomButton = ({ children, onClick, disabled, type = "button" }) => (
  <Button color="primary" disabled={disabled} type={type} onClick={onClick}>
    {children}
  </Button>
);
export default CustomButton;
