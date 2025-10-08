import React, { useState, useEffect } from "react";
import "flowbite/dist/flowbite.css";

const LoadingSpinner = () => {
  const [dots, setDots] = useState("");

  // Animate the dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500); // dots appear every 0.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      {/* Spinner Image */}
      <img
        src="/camera.svg" // make sure this path is correct
        alt="Loading spinner"
        className="w-10 h-10"
      />

      {/* Loading text with animated dots */}
      <span className="text-white text-lg font-semibold animate-pulse mt-2">
        Loading{dots}
      </span>
    </div>
  );
};

export default LoadingSpinner;
