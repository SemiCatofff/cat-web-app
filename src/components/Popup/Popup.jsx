import React, { useState } from 'react';


const Popup = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        {content}
      </div>
    </div>
  );
};

export default Popup;
