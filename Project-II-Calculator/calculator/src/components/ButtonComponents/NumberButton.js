import React from 'react';
import './Button.css';



export default function NumberButton(props) {
  
    return (
        <button className={`number-button ${props.className}`}>{props.text}</button>
            
    );
};
