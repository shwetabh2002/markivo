import React, { useEffect, useRef, useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import myVideo from "/assets/digi-market.mp4";

function Body() {
  const circleRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Bigger", "Better", "Faster"];

  useEffect(() => {
    const field = circleRef.current;
    if (!field) return;

    const handleMouseMove = (e) => {
      const rect = field.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      // Cap max movement to ±20px
      const moveX = Math.max(-20, Math.min(20, offsetX * 0.1));
      const moveY = Math.max(-20, Math.min(20, offsetY * 0.1));

      field.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      field.style.transform = "translate(0, 0)";
    };

    field.addEventListener("mousemove", handleMouseMove);
    field.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      field.removeEventListener("mousemove", handleMouseMove);
      field.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="video-container">
        <video
          src={myVideo}
          width="100%"
          autoPlay
          muted
          loop
          className="cropped-video"
        />
        <div className="navbar-overlay">
          <div className="overlay-content">
            <Navbar />
            <div className="tagline">
              <p>We build trends</p>
            </div>
            <div className="video-footer">
              <p>
                This page is
                <br />
                <span key={words[wordIndex]} className="animated-word">
                  {words[wordIndex]}
                </span>
              </p>
              <div className="circle" ref={circleRef}>
                Schedule A Meeting
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
