import React, { useState, useEffect } from "react";

const BrailleSpinner = () => {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 100); // speed (ms per frame)
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ fontFamily: "monospace", fontSize: "1.5rem" }}>
      {frames[frameIndex]}
    </span>
  );
};

export default BrailleSpinner;
