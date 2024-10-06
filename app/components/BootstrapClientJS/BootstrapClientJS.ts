"use client";
import { useEffect } from "react";

const BootstrapClientJS = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null
};

export default BootstrapClientJS
