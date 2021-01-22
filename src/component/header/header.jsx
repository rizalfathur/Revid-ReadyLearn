import React,{Fragment} from 'react'
import * as rb from 'react-bootstrap'

const Header = () => {
    return (
<Fragment>    
    
    <div className="header">
    <rb.Navbar id="styling" collapseOnSelect expand="lg" variant="dark">
        <rb.Navbar.Brand href="/home" id="logo">ReadyLearn </rb.Navbar.Brand>
        <rb.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <rb.Navbar.Collapse id="responsive-navbar-nav">
            <rb.Nav className="mr-auto">
            </rb.Nav>
            <rb.Nav>
            <rb.Nav.Link href="/login" id="login">Masuk</rb.Nav.Link>
            <rb.Nav.Link eventKey={2} href="/register" id="daftar">
                Daftar
            </rb.Nav.Link>
            </rb.Nav>
        </rb.Navbar.Collapse>
    </rb.Navbar>
    </div>    

</Fragment>
    )
}

export default Header
