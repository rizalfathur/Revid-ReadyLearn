import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, Login, Register} from '../../pages'
import NotFound from '../../pages/NotFound.js'
import Paket from '../../pages/Paket'
import Payment from '../../pages/Payment'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/paket">
                    <Paket />
                </Route>
                <Route exact path="/payment">
                    <Payment />
                </Route>
                <Route exact path="">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
