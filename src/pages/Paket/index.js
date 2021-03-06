import React, {useState} from 'react'
import Footer from '../../component/Footer'
import Card from '../../component/header/Paket/Card'
import Hamburger from '../../component/header/Paket/Hamburger'
import Nav from '../../component/header/Paket/Nav'
import SideMenu from '../../component/header/Paket/SideMenu'
import Video from '../../component/header/Paket/Video'
import './index.scss'
import PaketSaya from './PaketSaya'

const Paket = () => {
    const saintek = [`Matematika`, `Fisika`, `Kimia`, `Biologi`, `TPS`]
    const soshum = [`Geografi`, `Sejarah`, `Ekonomi`, `Sosiologi`, `TPS`]

    const [open,
        setOpen] = useState(false)
    const [nav,
        setNav] = useState('available');
    const [side,
        setSide] = useState('');
    const [type,
        setType] = useState('');

    return (
        <div className="paket-page">
            <Nav setNav={setNav} nav={nav} mode="paket" open={open} setOpen={setOpen} />
            <SideMenu setNav={setNav} open={open} setOpen={setOpen} setSide={setSide} setType={setType} type={type} />
            <div className="main-container">
                {nav === 'available' && <div className="avail">
                    <div className="course-container">
                        <Video/>
                        <Card title="SAINTEK" item={saintek} setType={setType}/>
                    </div>
                    <div className="course-container">
                        <Video/>
                        <Card title="SOSHUM" item={soshum} setType={setType}/>
                    </div>
                </div>}

                {nav === 'mine' && !type && <div className="avail">
                    <div className="course-container">
                        <Video/>
                        <Card
                            title="SAINTEK"
                            item={saintek}
                            setType={setType}
                            setSide={setSide}
                            isEnrolled={true}/>
                    </div>
                    <div className="course-container">
                        <Video/>
                        <Card
                            title="SOSHUM"
                            item={soshum}
                            setType={setType}
                            setSide={setSide}
                            isEnrolled={true}/>
                    </div>
                </div>}
                {nav === "mine" && type && <div className="mine"><PaketSaya
                    setType={setType}
                    side={side}
                    type={type}
                    setSide={setSide}
                    setNav={setNav}
                    open={open}
                    setOpen={setOpen}/></div>}

            </div>
            <Footer/>
        </div>
    )
}

export default Paket
