import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import headerContent from './HeaderContent';


const today = new Date();

function ImageThumbnail({url, alt}) {
    return (
       <img src = {url} alt = {alt}></img>
    );
}

function HeaderTitle ({text, handle, timestamp}) {
    return (
        <div>
            <h3>{text}</h3> {handle} {timestamp}
        </div>
    );

}

function HeaderContent() {
    return (
        <p>
            {headerContent}
        </p>
    )
}

function HeaderContainer () {
    return (
        <div>
            <ImageThumbnail url = "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt = "Lambda School Red" />
            <HeaderTitle text = "Lambda School" handle = "@LambdaSchool" timestamp = {today.getDate} />
            <HeaderContent />
        </div>
    )

}

const container = <HeaderContainer/>;

ReactDOM.render(container, document.querySelector('#target'))