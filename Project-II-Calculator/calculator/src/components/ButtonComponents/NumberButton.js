import React from 'react';
import './Button.css';



export default function NumberButton(props) {
    const { numbers, height, width } = props;
    const style = {
        height:{height},
        width:{width}
    }
    return (
        <div style ={style}className='keypad'>
            <div className='clear'>Clear </div>
            <div className='numbers'>
                 buttons.map((button) => {
                <div id={button.id}>{button.value}</div>
                })
            </div>
        <div/>
    );
}
