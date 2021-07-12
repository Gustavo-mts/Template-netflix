import React from 'react';
import './Header.css';

export default function Header({black}) {
    return (
        <header  className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0.png?h=eba99c47b726e04e1228d83852b69211" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}