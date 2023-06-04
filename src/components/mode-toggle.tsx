import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/display-name
const ModeToggle = () => {
  const [currentState, setCurrentState] = useState('Unchecked')

  const changeMode = (mode: string) => {
    mode == 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    localStorage.theme = mode;
  }
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    localStorage.theme = 'dark'
    event.target.checked === true ? changeMode('light') : changeMode('dark');
  }
  useEffect( () => {
    console.log(localStorage.theme);
    localStorage.theme !== 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

  }, [] );
  return (
    <>
    <input className="sr-only checkbox" type="checkbox" id="checkbox" 
        onClick={(event) => handleClick(event)} />
    <label className="label" htmlFor="checkbox">
      <div className="head ml-auto md:ml-0">
        <div className="face">
          <div className="face__smile"></div>
          <div className="face__sleep"></div>
        </div>
      </div>
    </label>
    </>
  );
};

export default ModeToggle
