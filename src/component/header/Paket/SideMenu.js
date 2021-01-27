import React from 'react'
import Hamburger from './Hamburger'

const SideMenu = ({open, setOpen, setSide, setType, type, setNav}) => {
    const saintek = [`Matematika`, `Fisika`, `Kimia`, `Biologi`, `TPS`]
    const soshum = [`Geografi`, `Sejarah`, `Ekonomi`, `Sosiologi`, `TPS`]

    return (
        <div>
            <div
                className={open
                ? `side-menu active`
                : `side-menu`}>
                <div className="top-side">
                    <h3>{type && 'Materi Bagian'}</h3>
                    <Hamburger onClick={setOpen} value={false}/>
                </div>
                <div className="content-side">
                    <div>{type === 'SAINTEK' && <div>
                            {saintek.map(item => <li
                                onClick={() => {
                                setSide(item);
                                setOpen(false)
                            }}>{item}</li>)}
                        </div>}
                        {type === 'SOSHUM' && <div>
                            {soshum.map(item => <li
                                onClick={() => {
                                setSide(item);
                                setOpen(false)
                            }}>{item}</li>)}
                        </div>}</div>
                </div>
                <div className="nav-menu-mobile">
                    <div
                        className='nav'
                        onClick={() => {setNav('available'); setOpen(false); setType('')}}>
                        <h6>Paket video yang tersedia</h6>
                    </div>
                    <div
                        className='nav'
                        onClick={() => {setNav('mine'); setOpen(false); setType('')}}>
                        <h6>Paket video saya</h6>
                    </div>
                </div>
                <div className="bottom-side" onClick={() => setType('')}>
                    Kembali
                </div>
            </div>
        </div>
    )
}

export default SideMenu
