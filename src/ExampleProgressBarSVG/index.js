import React, { useEffect, useState } from "react";
import './style.css'

function ExampleProgressBarSVG({ size, strokeWidth, percentage, color }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <div
      className="wrapProgress"
      style={{ backgroundColor: "green", with: "100%", height: "200px" }}
    >
      <svg className="circleProgress" width={size} height={size} viewBox={viewBox}>
        <circle          
          fill="none"
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
        />
        <text
          fill="#ffffff"
          x="36%"
          y="43%"
          dy="20px"
          textAnchor="middle"
          fontSize="18px"
        >
          05/21
        </text>
        <text
          fill="#ffffff"
          x="64%"
          y="43%"
          dy="20px"
          textAnchor="middle"
          fontSize="25px"
        >{`${percentage}%`}</text>
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

export default ExampleProgressBarSVG;
