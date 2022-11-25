import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../../redux/features/messageSlice";

function AlertPopup() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);
  const severity = useSelector((state) => state.message.severity);

  useEffect(() => {
    const timer = setTimeout(() => {
      message !== "" && dispatch(clearMessage());
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, dispatch]);

  if (message !== "")
    return (
      <Alert
        severity={severity}
        style={{ position: "fixed", margin: "5rem 0 0 1rem", zIndex: "1960" }}
      >
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    );
}

export default AlertPopup;
