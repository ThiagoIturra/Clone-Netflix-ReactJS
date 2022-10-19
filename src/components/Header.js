import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="Netflix" />
                </a>
            </div>
            <div className="user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}