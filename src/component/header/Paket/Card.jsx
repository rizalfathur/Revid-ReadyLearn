import React from 'react'

const Card = ({title, item}) => {
    return (
        <div className="card-container">
            <h4>{title}</h4>
            <p>Pembahasan pada kelas ini akan terbagi ke dalam beberapa video yang berisikan: </p>
            <div> {item.map(mat => <p>{mat}</p>)}</div>
            <div className="btn-container"><button>Beli Paket</button></div>
        </div>
    )
}

export default Card
