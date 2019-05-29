import React from 'react';
import './Button.css';

export default function ButtonContainer(props) {
    return( 
        <div className={`button-container ${props.className}`}>
          {props.children}
        </div>
    );
  
};

 