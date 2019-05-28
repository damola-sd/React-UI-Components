import React from 'react';
import './Button.css';

export default function ActionButton(props) {
    const { actions, height, width } = props;
    const style = {
        height:{height},
        width:{width}
    }
    return (
        <div style={style} className="actionKeypad">
           { actions.map((action) => {
                <div className="action" id={action.id}>
                {action.value}
                </div>
            })
        }
        </div>
    )
}