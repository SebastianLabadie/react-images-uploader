import React from "react";
import "./DropZone.css";
import { useDropzone } from "react-dropzone";

function DropZone({ isError, preview, image, onDrop }) {
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      onDrop(acceptedFile[0]);
    },
  });

  return (
    <div {...getRootProps({ className: isDragActive ? "dropzone active" : "dropzone" })}>
      <img className="image" src={image} alt="dropzone" />

      {!preview && (
        <h4 className="dropzone-message">
          {isDragReject
            ? "File type not accepted, sorry!"
            : "Drag and drop your image here"}
        </h4>
      )}
      <input {...getInputProps()} />
    </div>
  );
}

export default DropZone;
