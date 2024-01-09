import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { func } from "prop-types";

//setting up React Router with Browser Router
function App () {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/aboutme" component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </Switch>
            </div>
        </Router>
    );
}

// export app
export default App;