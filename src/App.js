import React, { useState } from "react";
import Header from "./Components/Header/Header";
import ImageGrid from "./Components/ImageGrid/ImageGrid";
import ImageModal from "./Components/Modal/ImageModal";
import UploadForm from "./Components/UploadForm/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
