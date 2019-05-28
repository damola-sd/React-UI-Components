import React from 'react';
import './Display.css';


export default function CalculatorDisplay (props) {

    const { size, color} = props;
    const style = { 
        height:{size},
        backgroundColor:{color}
    };
    return(
        <div style={style}>

        </div>
    );
}