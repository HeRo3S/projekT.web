import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <label htmlFor="image-input">Image</label>
      <br />
      <br />
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"376px"}
            height={"130px"}
            src={URL.createObjectURL(selectedImage)}
          />
        </div>
      )}
      <br />
      <input
        id="image-input"
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
