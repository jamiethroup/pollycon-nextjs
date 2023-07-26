// ScrollClassAdder.js
import React, { useEffect, useState } from "react";

const ScrollClassAdder = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove the "scrolled" class to the <html> tag based on the "scrolled" state
    if (scrolled) {
      document.documentElement.classList.add("scrolled");
    } else {
      document.documentElement.classList.remove("scrolled");
    }
  }, [scrolled]);

  return <div>{/* Your other content here */}</div>;
};

export default ScrollClassAdder;
