import React, {useState} from 'react'
import Footer from '../../component/Footer'
import Hamburger from '../../component/header/Paket/Hamburger'
import Nav from '../../component/header/Paket/Nav'
import SideMenu from '../../component/header/Paket/SideMenu'

const PaketSaya = ({type, side, setType, setSide}) => {

    const [open, setOpen] = useState(false)

    return (
        <div>

            <div className="title-nav">
                <Hamburger onClick={setOpen} value={true}/>
                <div className="title">
                    <h1>{`${type.slice(0,1).toUpperCase()}${type.slice(1, type.length).toLowerCase()}`}</h1>
                    <h5>{side && `Materi Bagian: ${side}`}</h5>
                </div>
            </div>
            <SideMenu open={open} setOpen={setOpen} setSide={setSide} setType={setType} type={type} />
        </div>

    )
}

export default PaketSaya
