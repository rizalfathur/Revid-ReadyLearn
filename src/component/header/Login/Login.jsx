import React, { Fragment } from 'react'
import * as rb from 'react-bootstrap'

const Login = () =>  {
    
    return (
        <Fragment>
            <rb.Container>
                <rb.Row className="justify-content-md-center" >
                    <rb.Col md="auto" >
                        <rb.Card className="text-center" id="login-card">
                            <rb.Card.Header id="form-label">Masuk</rb.Card.Header>
                            <rb.Card.Body id="container-body">
                                <rb.Form id="input">
                                    <rb.Form.Group controlId="formGroupEmail">
                                        <rb.Form.Control type="email" placeholder="Email" id="email"/>
                                    </rb.Form.Group>
                                    <rb.Form.Group controlId="formGroupPassword">
                                        <rb.Form.Control type="password" placeholder="Password" id="pass"/>
                                    </rb.Form.Group>
                                </rb.Form>
                            </rb.Card.Body>
                            <div>
                            <rb.Button variant="primary" id="btn-login" href="/home"> Masuk </rb.Button>
                            </div>
                            <rb.Card.Footer className="text-muted" id="bottom-text">Belum punya akun? Ayo <a href="/register"> Daftar</a></rb.Card.Footer>
                        </rb.Card>
                        

                    </rb.Col>
                </rb.Row>
            </rb.Container>
        </Fragment>
    )
    
}

export default Login
