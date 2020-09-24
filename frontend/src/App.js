import React, { useState } from "react";
import "./App.css";
import DropZone from "./components/DropZone/DropZone";
import image from "./images/image.svg";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);
  const [preview, setPreview] = useState(null);

  // Handling file selection from input
  const onFileSelected = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (values) => {
    setSelectedFile(values.file);
    // createFormData();
  };
  
  const onDrop = (acceptedFile) => {
    console.log(acceptedFile)
  };

  return (
    <div className="app">
      <div className="card">
        <div className="container">
          <div className="container-title">
              <h3 className="title">Upload your image</h3>
          </div>
          <div className="container-dropzone">
            <h4 className="subtitle">File should be Jpeg, Png,...</h4>
            <form onSubmit={handleSubmit}>
              <DropZone image={image} onDrop={onDrop} preview={preview} />
              <div>
                <h4 className="text-or">Or</h4>
                <div className="container">
                  {isUploadSuccessful ? null : (
                    <label htmlFor="file-picker" className="btn-file-picker">
                      <input
                        id="file-picker"
                        type="file"
                        style={{ display: "none" }}
                        onChange={onFileSelected}
                      />
                      Choose a file
                    </label>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
