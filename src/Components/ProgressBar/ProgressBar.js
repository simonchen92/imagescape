import React, { useEffect } from "react";
import UseStorage from "../Firebase/UseStorage";

import "./ProgressBar.scss";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = UseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
