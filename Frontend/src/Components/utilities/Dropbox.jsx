import React, { useState } from 'react';
import './Dropbox.css';

// const ImageDropbox = () => {
//   const [dragging, setDragging] = useState(false);
//   const [fileName, setFileName] = useState('');

//   const handleDragStart = (e) => {
//     const fileName = e.target.files[0].name; // Get the file name
//     setFileName(fileName);
//     setDragging(true);
//   };

//   const handleDragEnd = () => {
//     setDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const fileName = e.dataTransfer.files[0].name; // Get the file name
//     setFileName(fileName);
//     setDragging(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleSubmit = () => {
//     // Add your logic to handle submission
//     alert(`Submitting file: `);
//     setBannerText("Loan Application Approved");
//     setBannerColor("green");
//   };

//   const handleClear = () => {
//     // Clear the contents of the drop box
//     setFileName('');
//   };

//   const [bannerText, setBannerText] = useState('');
//   const [bannerColor, setBannerColor] = useState('');

//   return (
//     <div className={`image-dropbox ${dragging? 'dragging' : ''}`} onDrop={handleDrop} onDragOver={handleDragOver}>
//       <input type="file" onChange={handleDragStart} />
//       <div className="drop-box">{fileName && <p>{fileName}</p>}</div>
//       <div className="buttons-container">
//         <button onClick={handleSubmit}>Submit</button>
//         <button onClick={handleClear}>Clear</button>
//       </div>
//       <div className="banner" style={{ backgroundColor: bannerColor }}>
//         {bannerText}
//       </div>
//     </div>
//   );
// };

// export default ImageDropbox;import React, { useState } from 'react';
import './Dropbox.css';

const ImageDropbox = () => {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDragStart = (e) => {
    const fileName = e.target.files[0].name; // Get the file name
    setFileName(fileName);
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fileName = e.dataTransfer.files[0].name; // Get the file name
    setFileName(fileName);
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    // Add your logic to handle submission
    alert(`Submitting file: ${fileName}`);
    if (fileName === 'lone1.jpg') {
      setBannerText("Loan Application Approved");
      setBannerColor("green");
      setBannerDisplay("block");
      setTimeout(() => {
        setBannerDisplay("Loading");
      }, 10000);
    } else {
      setBannerText("Loan Application Rejected");
      setBannerColor("red");
      setBannerDisplay("block");
      setTimeout(() => {
        setBannerDisplay("none");
      }, 10000);
    }
  };


  const handleClear = () => {
    // Clear the contents of the drop box
    setFileName('');
  };

  const [bannerText, setBannerText] = useState('');
  const [bannerColor, setBannerColor] = useState('');
  const [bannerDisplay, setBannerDisplay] = useState('none');

  return (
    <div className={`image-dropbox ${dragging? 'dragging' : ''}`} onDrop={handleDrop} onDragOver={handleDragOver}>
      <input type="file" onChange={handleDragStart} />
      <div className="drop-box">{fileName && <p>{fileName}</p>}</div>
      <div className="buttons-container">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="banner" style={{ backgroundColor: bannerColor, display: bannerDisplay , height:120 , fontSize:30 , alignContent:'center'}}>
        {bannerText}
      </div>
    </div>
  );
};

export default ImageDropbox;