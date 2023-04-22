import React, { useState, useEffect, useRef } from "react";
import "./OnScrollReveal.css";

const OnScrollReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
  
    observer.observe(domRef.current);
  
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={domRef} className={`on-scroll-reveal ${isVisible ? "is-visible" : ""}`}>
      <div>{children}</div>
    </div>
  );
};

export default OnScrollReveal;
