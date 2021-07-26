import React from 'react';
import { Route, Switch } from 'react-router';
import Portfolio from './Portfolio/Portfolio.js';
import About from './About/About.js';
import Resume from './Resume';
import Home from './Home';

function Routes() {

    return (
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Resume">
                    <Resume />
                </Route>
                <Route path="/Portfolio">
                    <Portfolio />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
    )

}

export default Routes;