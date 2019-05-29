import React from 'react';
import './Button.css';

export default function ActionButton(props) {
    
    return (
        <button className={`three-section ${props.className}`}>{props.text}</button>
    );
};