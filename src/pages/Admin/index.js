import React, { useState } from 'react'
import * as rb from 'react-bootstrap'
import './index.css'
import Header from '../../component/header/Admin/admin-header'

const Admin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const rowEvents = () => {
        console.log(this.timestamp);
    }

    const entry = [
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JDUWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
        {timestamp: "15:39:27-Jan 28 2020",
         transaction: "JBOWH-57120-71368-21376", 
         email: "boombop@gmail.com", 
         user: "BoombopSans", 
         status: "Pending", 
         action: <button onClick={handleShow}>Details</button>},
    ]

    const ModalContent = () => {
        return (
            <rb.Modal show={show} onHide={handleClose} id="admin-modal">
                <rb.Modal.Header id="admin-head">
                    <rb.Modal.Title>
                        <div id="admin-title">
                            <h4 className="desc-head">John Doe</h4>
                            <p className="desc">boombop@gmail.com</p>
                            <p className="desc">USER ID: BoombopSans</p>
                        </div>
                    </rb.Modal.Title>
                </rb.Modal.Header>
                <rb.Modal.Body id="admin-body">
                    <hr id="divider-mid"/>
                    <div className="subhead">
                        <p className="desc"> TRANSACTION ID: JDUWH-57120-71368-21376</p>
                    </div>
                    <hr />
                    <div className="subhead">
                        <p className="desc">TIMESTAMP: 15:39:27-Jan 28 2020</p>
                    </div>
                    <hr />
                    <div className="subhead">
                        <p className="desc">STATUS: PENDING</p>
                    </div>
                    <hr />
                    <div className="subhead">
                        <p className="desc-end">Payment Proof</p>
                    </div>
                    <hr />
                    <div className="contoh">
                        <img
                            className="contoh"
                            src={`${process.env.PUBLIC_URL}/assets/images/contoh-bukti.jpg`}
                            alt="bukti"/>
                    </div>
                </rb.Modal.Body>
                <rb.Modal.Footer id="admin-footer">
                    <div id="footer-div">
                        <button className="cta-button accept-button" variant="secondary">Confirm</button>
                        <button className="cta-button deny-button" variant="secondary">Deny</button>
                        <button className="cta-button" variant="secondary" onClick={handleClose}>Close</button>
                    </div>
                </rb.Modal.Footer>
            </rb.Modal>
        )
    }

    const renderEntry = (entry, index) => {
        return (
            <tr key={index}>
                <td>{entry.timestamp}</td>
                <td>{entry.transaction}</td>
                <td>{entry.email}</td>
                <td>{entry.user}</td>
                <td>{entry.status}</td>
                <td>{entry.action}</td>
            </tr>
        )
    }

    return (
        <div>
            <Header />
            <div className="main">
                <h3 id="heading">Konfirmasi Pembayaran</h3>
                <hr id="spacing" />
                <rb.Table hover striped border id="admin-table">
                    <thead id="table-head">
                        <th>TIMESTAMP</th>
                        <th>TRANSACTION-ID</th>
                        <th>EMAIL</th>
                        <th>USER</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </thead>
                    <tbody>
                        {entry.map(renderEntry)}
                    </tbody>
                </rb.Table>
            </div>
            {show ? <ModalContent /> : null}
        </div>
    )
}

export default Admin;