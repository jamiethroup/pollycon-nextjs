"use client";

import { useEffect, useRef } from 'react';

const FadingSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
        entry.target.classList.add('is-visible');
        }, index * 200);
        observer.unobserve(entry.target);
      }
      });
    });

    const elements = document.getElementsByClassName('next-fade');
    Array.from(elements).forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={sectionRef} className="next-fade">{children}</div>;
};

export default FadingSection;