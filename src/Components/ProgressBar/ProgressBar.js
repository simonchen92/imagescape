import React, { useEffect } from "react";
import UseStorage from "../Firebase/UseStorage";

import { motion } from "framer-motion";

import "./ProgressBar.scss";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = UseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
