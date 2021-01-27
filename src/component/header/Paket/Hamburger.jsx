import React from 'react'

const Hamburger = ({onClick, value}) => {
    return (
        <div className="hamburger" onClick={() => onClick(value)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger
