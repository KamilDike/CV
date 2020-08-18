import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__phone">
                <p className="header__description">PHONE</p>
                <p>664-420-071</p>
            </div>
            <div className="header__email">
                <p className="header__description">EMAIL</p>
                <p>Kamil.Dike.96@gmail.com</p>
            </div>
            <div className="header__address">
                <p className="header__description">ADDRESS</p>
                <p>Wrocław 51-120 Bałtycka 31/16</p>
            </div>
        </div>
    )
}

export default Header