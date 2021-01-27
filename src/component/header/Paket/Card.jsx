import React from 'react'
import { useHistory } from 'react-router-dom'

const Card = ({title, item, setType, setSide, isEnrolled}) => {
    const history = useHistory();

    return (
        <div className="card-container">
            <h4>{title}</h4>
            <p>Pembahasan pada kelas ini akan terbagi ke dalam beberapa video yang berisikan:
            </p>
            <div>
                {item.map(mat => <p>{mat}</p>)}</div>
            <div className="btn-container">
                <button className={isEnrolled && 'enrolled'} onClick={() => {setType(title); setSide(item[0])}}>{isEnrolled
                        ? 'Masuk Kelas'
                        : 'Beli Paket'}</button>
            </div>
        </div>
    )
}

export default Card
