import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer ({url}) {
    return ( 
        <div onClick  = {Window.open(url)}>
            <CardBanner url = "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"/>
            <CardContent heading = "Get Started With React" paragragh = "React makes it painless to create interactive UIs. Design simple views foreach staet inyour application" />
        </div>
    )
}

ReactDOM.render(<CardContainer url = "https://www.reactjs.org" />, document.querySelector('card'));
