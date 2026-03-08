import React from 'react';
import './RulesModal.css';
import Button from './Button';

const RulesModal = ({ isOpen, onClose, gameName, rules }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay animate-fade-in" onClick={onClose}>
            <div className="modal-content animate-scale-in" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Reglas: {gameName}</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    {rules.map((rule, idx) => (
                        <p key={idx} className="rule-item">{rule}</p>
                    ))}
                </div>
                <div className="modal-footer">
                    <Button onClick={onClose} fullWidth>Entendido</Button>
                </div>
            </div>
        </div>
    );
};

export default RulesModal;
