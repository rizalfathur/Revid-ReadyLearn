import React, {Component, Fragment} from 'react'
import * as rb from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'

class Daftar extends Component {
    render(){
    return (
        <Fragment>
            <rb.Container>
                <rb.Row className="justify-content-md-center" >
                    <rb.Col md="auto" >
                        <rb.Card className="text-center" id="login-card">
                            <rb.Card.Header id="form-label">Daftar</rb.Card.Header>
                            <rb.Card.Body id="container-body">
                                <rb.Form id="input">
                                    <rb.Form.Group controlId="formGroupNama">
                                        <rb.Form.Control type="nama" placeholder="Nama" id="nama"/>
                                    </rb.Form.Group>
                                    <rb.Form.Group controlId="formGroupEmail">
                                        <rb.Form.Control type="email" placeholder="Email" id="email"/>
                                    </rb.Form.Group>
                                    <rb.Form.Group controlId="formGroupPassword">
                                        <rb.Form.Control type="password" placeholder="Password" id="pass"/>
                                    </rb.Form.Group>
                                    <rb.Form.Group controlId="formGroupPassword">
                                        <rb.Form.Control type="password" placeholder="Konfirmasi Password" id="confirm-pass"/>
                                    </rb.Form.Group>
                                    <rb.Form.Group>
                                        <rb.Form.Control as="select" id="jurusan" title="Jurusan">
                                            <option>Saintek</option>
                                            <option>Soshum</option>
                                            <option>None</option>
                                        </rb.Form.Control>
                                    </rb.Form.Group>
                                </rb.Form>
                            </rb.Card.Body>
                            <div>
                            <rb.Button type="button" variant="primary" id="btn-daftar" href="/login"> Submit </rb.Button>
                                                                                                                
                                                                                                            
                            </div>
                            <rb.Card.Footer className="text-muted" id="bottom-text">Dengan mendaftar, anda setuju dengan <a href="#"> Kebijakan Privasi</a> kami.</rb.Card.Footer>
                        </rb.Card>
                        

                    </rb.Col>
                </rb.Row>
            </rb.Container>
        </Fragment>
        )
    }
}

export default Daftar
