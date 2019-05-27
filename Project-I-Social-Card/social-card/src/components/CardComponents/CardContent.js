import React from 'react';
import './Card.css';


function CardContent ({heading, paragragh}) {
    return (
        <div>
       <h4>{heading}</h4>
        <p>
            {paragragh}
        </p>
        </div>

    )
}
