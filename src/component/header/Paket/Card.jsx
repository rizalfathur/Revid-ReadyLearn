import React from 'react'
import { useHistory } from 'react-router-dom'

const Card = ({title, item, setType, setSide, isEnrolled}) => {
    const history = useHistory();

    return (
        <div className="card-container">
            <h3>{title}</h3>
            <p>Pembahasan pada kelas ini akan terbagi ke dalam beberapa video yang berisikan:
            </p>
            <div>
                {item.map(mat => <p>{mat}</p>)}</div>
            <div className="btn-container">
                {isEnrolled && <button className='enrolled' onClick={() => {setType(title); setSide(item[0])}}>Masuk Kelas</button>}
                {!isEnrolled && <button onClick={() => history.push('payment')}>Beli Paket</button>}
            </div>
        </div>
    )
}

export default Card
