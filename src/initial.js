import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const InitView = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);
  return <>{null}</>;
};

export default InitView;
