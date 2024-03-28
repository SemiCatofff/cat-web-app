import React from 'react';


const Popup = ({ isOpen, content, onClose }) => {
  const popupClasses = `popup-backdrop absolute z-40 h-screen  ${isOpen ? 'open' : ''}`;
  const contentClasses = `popup-content h-[50%] ${isOpen ? 'open' : ''}`;

  return (
    <div className={popupClasses}>
      <div className={contentClasses}>
        <div className="popup-content-inner">
          <button className="close-button" onClick={onClose}>×</button>
          <div className="confirmation-content">
            {content}
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Popup;
