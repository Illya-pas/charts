import React from "react";

export const Gradient = () => (
  <svg
    xmlns="https://www.w3.org/2000/svg"
    version="1.1"
    width="0"
    height="0"
    style={{ visibility: "hidden" }}
  >
    <defs>
      <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="0%" y2="90%">
        <stop offset="0%" style={{ stopColor: "#c669ff", stopOpacity: 0.15 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#3bafda", stopOpacity: 0.45 }}
        />
      </linearGradient>
    </defs>
  </svg>
);
