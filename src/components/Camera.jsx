"use client"

import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const dataUrl = webcamRef.current.getScreenshot();
    // send the camera data in dataUrl format to the backend
    console.log(dataUrl);
  };

  return (
    <div>
      <h2>Camera Data</h2>
      <Webcam
        audio={false}
        height={250}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={250}
      />
      <button onClick={capture}>Capture Photo</button>
    </div>
  );
};

export default Camera;
