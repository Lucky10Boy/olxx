import React, { useState } from 'react';

const Dropdown = ({ selected, setSelected, array }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown-select-box">
      <div
        className="dropdown-select-btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected.name}
      </div>
      {isActive && (
        <div className="dropdown-select-content">
          {array.map((item) => (
            <div
              key={item._id}
              onClick={(e) => {
                setSelected(item);
                setIsActive(false);
              }}
              className="dropdown-select-item"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
