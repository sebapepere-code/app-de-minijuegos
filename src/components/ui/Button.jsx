import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, fullWidth = false }) => {
    const baseClass = `custom-button animate-scale-in btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`;

    return (
        <button
            className={baseClass}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
