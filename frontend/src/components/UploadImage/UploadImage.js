import React, { useState } from "react";
import "./UploadImage.css";
import image from "../../images/image.svg";
import DropZone from "../DropZone/DropZone";

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onDrop = (acceptedFile) => {
    setSelectedFile(acceptedFile);
    // createFormData();
  };
  console.log(selectedFile);
  return (
    <div className="upload__card">
      <h1 className="upload__title">Upload your image</h1>

        <div className="upload__form-container">
          <p className="upload__sub__title">File should be Jpeg,Png...</p>
      <form /* onSubmit={handleSubmit} */>
          <DropZone image={image} onDrop={onDrop} preview={preview} />
          <h4 className="upload__txt__or">Or</h4>
          <div className="container">
            <label htmlFor="file-picker" className="upload__btn">
              <input id="file-picker" type="file" style={{ display: "none" }} />
              Choose a file
            </label>
          </div>
      </form>
        </div>
    </div>
  );
}

export default UploadImage;
