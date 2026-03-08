import React from 'react';
import './Card.css';

const Card = ({ children, onClick, className = '', glow = false }) => {
    return (
        <div
            className={`glass-card animate-fade-in ${glow ? 'card-glow' : ''} ${className}`}
            onClick={onClick}
            style={{ cursor: onClick ? 'pointer' : 'default' }}
        >
            {children}
        </div>
    );
};

export default Card;
