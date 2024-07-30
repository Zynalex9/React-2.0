import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
const Contact = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={() => navigation("/")}>Back to Home</button>
    </div>
  );
};

export default Contact;
