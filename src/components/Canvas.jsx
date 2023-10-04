"use client"

import React, { useRef, useEffect, useState } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [canvasData, setCanvasData] = useState('');

  useEffect(() => {
    // ... (same canvas initialization code as before)
    const canvas = canvasRef.current;
    canvas.width = 250;
    canvas.height = 250;
    const context = canvas.getContext('2d');
    contextRef.current = context;
    const canvasDataUrl = canvas.toDataURL();
    setCanvasData(canvasDataUrl);
  }, []);

  const handleMouseDown = (e) => {
    const context = contextRef.current;
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    contextRef.current.stroke();
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return; // Only draw when left mouse button is held
    const context = contextRef.current;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    contextRef.current.stroke();
  };

  const handleSaveCanvasData = (canvasData) => {
    /* handle canvas submission here
       send the canvas data in dataUrl format to the backend
    */
    console.log(canvasData);
  };

  return (
    <div>
      <h2>Canvas Data</h2>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      />
      <button onClick={() => handleSaveCanvasData(canvasData)}>Save Canvas</button>
    </div>
  );
};

export default CanvasComponent;
