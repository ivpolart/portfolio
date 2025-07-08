import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, href = '#', isInternal = false, className = '' }) => {
  const buttonRef = useRef(null);

  const handleMouseEnter = (e) => {
    const btn = buttonRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  const Tag = isInternal ? Link : 'a';

  return (
    <div className="btn-holder">
      <Tag
        to={isInternal ? href : undefined}
        href={!isInternal ? href : undefined}
        className={`btn ${className}`}
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
      >
        <span>{children}</span>
      </Tag>
    </div>
  );
};

export default Button;
