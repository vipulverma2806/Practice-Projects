import React from "react";
import { useState } from "react";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const handleUpload = () => {
    // console.log(file);
    const formdata = new FormData();
    formdata.append("file", file);
    axios
      .post("http://localhost:5000/upload", formdata)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleshow = () => {
    axios
      .get("http://localhost:5000/getImage")
      .then((result) => {
        setImage[result];
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        multiple
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
          return console.log(e.target.files);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleshow}>show</button>
      <div>{image}</div>
    </div>
  );
};

export default FileUpload;
