import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Hamburger from './Hamburger';

const Nav = ({setNav, nav, mode, open, setOpen}) => {
    const history = useHistory();

    return (
        <div>
            <nav className="navbar">
                <div
                    className="navbar-brand"
                    onClick={() => {
                    history.push("/")
                }}>
                    <h3>ReadyLearn</h3>
                </div>

                <div className="nav-menu">
                    {mode === 'paket' && <div
                        className={`tab ${nav === 'available' && 'active'}`}
                        onClick={() => setNav('available')}>
                        <h6>Paket video yang tersedia</h6>
                    </div>}
                    {mode === 'paket' && <div
                        className={`tab ${nav === 'mine' && 'active'}`}
                        onClick={() => setNav('mine')}>
                        <h6>Paket video saya</h6>
                    </div>}
                    {mode === 'payment' && <div className='tab      payment-nav'>
                    <h6>Pembayaran</h6>
                </div>}
                </div>
                
                <div className="nav-hamburger">
                    {open
                        ? <div className="close-btn" onClick={() => setOpen(false)}>&#xd7;</div>
                        : <Hamburger onClick={setOpen} value={!open}/>}
                </div>
                <div className="exit-btn">
                    Keluar
                </div>
            </nav>
        </div>
    )
}

export default Nav
