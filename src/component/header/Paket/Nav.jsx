import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Nav = ({ setNav, nav }) => {
    const history = useHistory();

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand" onClick={() => {history.push("/")}}>
                    <h3>ReadyLearn</h3>
                </div>
                <div className={`tab ${nav === 'available' && 'active'}`} onClick={() => setNav('available')}>
                    <h6>Paket video yang tersedia</h6>
                </div>
                <div className={`tab ${nav === 'mine' && 'active'}`} onClick={() => setNav('mine')}>
                    <h6>Paket video saya</h6>
                </div>

                <div className="exit-btn">
                    Keluar
                </div>
            </nav>
        </div>
    )
}

export default Nav
