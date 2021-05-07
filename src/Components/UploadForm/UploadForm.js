import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

import "./UploadForm.scss";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const photoTypes = ["image/png", "image/jpeg"];

  const changeHandler = (event) => {
    let selected = event.target.files[0];

    if (selected && photoTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select a correct image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error-message">{error}</div>}
        {file && <div className="uploaded-image">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
