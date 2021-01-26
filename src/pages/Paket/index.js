import React from 'react'
import Footer from '../../component/Footer'
import Card from '../../component/header/Paket/Card'
import Nav from '../../component/header/Paket/Nav'
import Video from '../../component/header/Paket/Video'
import './index.scss'

const Paket = () => {
    const saintek = [`Matematika`, `Fisika`, `Kimia`, `Biologi`, `TPS`]
    const soshum = [`Geografi`, `Sejarah`, `Ekonomi`, `Sosiologi`, `TPS`]

    return (
        <div className="paket-page">
            <Nav/>
            <div className="main-container">
                <div className="med">
                    <div className="course-container">
                        <Video/>
                        <Card title="SAINTEK" item={saintek}/>
                    </div>
                    <div className="course-container">
                        <Video/>
                        <Card title="SOSHUM" item={soshum}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Paket
