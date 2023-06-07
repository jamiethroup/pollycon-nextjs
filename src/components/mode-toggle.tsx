import React, { useState, useEffect } from "react";

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  // Create a click event for the checkbox with the id of checkbox
  const handleClick = (event:React.MouseEvent<HTMLInputElement>) => {
    let switcher = event.target as HTMLInputElement;
    switcher.checked === true ? changeMode('light') : changeMode('dark');
  }

  const changeMode = (mode: string) => {
    mode == 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    localStorage.theme = mode;
  }
  // Use the useEffect hook to set the theme on page load
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      changeMode('dark')
      setIsChecked(false)
    } else {
      changeMode('light')
      setIsChecked(true)
    }
  }, [])
  

  return (
    <>
    <input
      className="sr-only checkbox"
      type="checkbox"
      id="checkbox"
      onClick={(event) => handleClick(event)}
      checked={isChecked}
      onChange={checkHandler}
    />
    <label className="label" htmlFor="checkbox">
      <div className="head ml-auto md:ml-0">
        <div className="face">
          <div className="face__smile"></div>
          <div className="face__sleep"></div>
        </div>
      </div>
    </label>
    </>
  )
}

function ModeToggle() {
  return (
    <div className="App">
      <Checkbox />
    </div>
  )
}

export default ModeToggle