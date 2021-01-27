import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Footer from '../../component/Footer'
import Nav from '../../component/header/Paket/Nav'
import SideMenu from '../../component/header/Paket/SideMenu'
import './index.scss'

const Payment = () => {
    const history = useHistory();

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
            <Nav setNav={setNav} nav={nav} mode="payment" open={open} setOpen={setOpen}/>
            <SideMenu
                setNav={setNav}
                open={open}
                setOpen={setOpen}
                setSide={setSide}
                setType={setType}
                type={type}/>
            <div className="main-container">
                <div className="payment-content">
                    <h4>Informasi Pembayaran</h4>
                    <h4 className="ket">Pembayaran yang harus di bayar: Rp 50000</h4>
                    <hr/>
                    <h4>Metode Pembayaran</h4>
                    <div
                        className="background-image"
                        style={{
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/payment-bg.png')`
                    }}>
                        <div className="payment-info">
                            <div className="account-transfer">
                                <h5>INB</h5>
                                <h5>09829xxx</h5>
                                <p>a.n. Samuel Amendikya</p>
                            </div>
                            <div className="account-transfer">
                                <h5>INB</h5>
                                <h5>09829xxx</h5>
                                <p>a.n. Samuel Amendikya</p>
                            </div>
                            <div className="account-transfer">
                                <h5>INB</h5>
                                <h5>09829xxx</h5>
                                <p>a.n. Samuel Amendikya</p>
                            </div>
                            <div className="account-transfer">
                                <h5>INB</h5>
                                <h5>09829xxx</h5>
                                <p>a.n. Samuel Amendikya</p>
                            </div>
                        </div>
                    </div>

                    <div className="btn-container">
                        <button className="konfirmasi-btn">Konfirmasi Pembayaran</button>
                        <button className="batal-btn" onClick={() => history.goBack()}>Batal</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Payment
