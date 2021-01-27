import React from 'react'

const VideoCard = () => {
    return (
        <div className="course-video-card">
            <div className="video-thumbnail">
                <iframe
                    width="315"
                    height="220"
                    src="https://www.youtube.com/embed/0Ly5nnz_xl0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div className="video-number">
                01
            </div>
            <div className="bottom-card">
                <h5>Lorem Ipsum</h5>
            </div>
        </div>
    )
}

export default VideoCard
