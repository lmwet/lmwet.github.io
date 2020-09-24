import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";
import Lmwet from "./components/lmwet";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Services from "./components/services";
import Print from "./components/print.js";
import Projects from "./components/projects";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HashRouter>
        <Nav></Nav>
        <ParallaxProvider>
            <Switch>
                <React.StrictMode>
                    <Route exact path="/" component={App} />
                    <Route exact path="/lmwet" component={Lmwet} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/print" component={Print} />
                    <Route exact path="/projects" component={Projects} />
                </React.StrictMode>
            </Switch>
            <Contact></Contact>
        </ParallaxProvider>
    </HashRouter>,

    document.getElementById("root")
);
serviceWorker.unregister();
