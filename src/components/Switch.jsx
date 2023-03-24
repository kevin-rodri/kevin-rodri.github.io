import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} className='dark-mode' onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default Switch;