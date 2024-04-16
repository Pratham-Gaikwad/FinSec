import React, { useState } from 'react';
import './Dropbox.css';

const Dropbox = () => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleRemoveClick = () => {
    setImage(null);
  };

  return (
    <div className="dropbox-container" onDrop={handleDrop} onDragOver={handleDragOver}>
      {image ? null : (
        <div className="upload-placeholder">
          <p>Drag &amp; Drop image here</p>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
        </div>
      )}
      <div className="uploaded-image-container">
        {image && (
          <>
            <img src={image} alt="Uploaded" className="uploaded-image" />
            <button onClick={handleRemoveClick}>Remove Image</button>
          </>
        )}
      </div>
      <button onClick={handleUploadClick}>Upload Image</button>
    </div>
  );
};

export default Dropbox;
