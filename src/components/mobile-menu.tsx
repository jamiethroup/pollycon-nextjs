import React, { useState, forwardRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/display-name
const MobileMenu = forwardRef((_props, ref) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useImperativeHandle(ref, () => ({
    callChildFunction(){
      setIsNavExpanded(!isNavExpanded);
    }
  }));
  return (
    <>
        <aside
        className={
          isNavExpanded ? "mobile-menu expanded" : "mobile-menu"
        } 
        >
          <div className="">
          <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          </ul>
          </div>
        </aside>
    </>
  );
});

export default MobileMenu