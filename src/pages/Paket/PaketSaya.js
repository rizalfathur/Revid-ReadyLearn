import React from 'react'
import Hamburger from '../../component/header/Paket/Hamburger'
import VideoCard from '../../component/header/Paket/VideoCard'

const PaketSaya = ({type, side, setType, setSide, setNav, open, setOpen}) => {

    return (
        <div>

            <div className="title-nav">
                <Hamburger onClick={setOpen} value={!open}/>
                <div className="title">
                    <h1>{`${type.slice(0,1).toUpperCase()}${type.slice(1, type.length).toLowerCase()}`}</h1>
                    <h5>{side && `Materi Bagian: ${side}`}</h5>
                </div>
            </div>
            <div className="course-video-container">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>

    )
}

export default PaketSaya
