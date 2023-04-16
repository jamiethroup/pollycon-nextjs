import React, { useState, useEffect, useRef } from "react";

export default function MobileMenu() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event: { target: any; }) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <>
    <div className="relative z-50" onClick={() => toggleDrawer(true)}>
          MENU
        </div>

        <ul ref={drawerRef} className={drawerRef} openDrawer={openDrawer}>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
    </>
  );
}