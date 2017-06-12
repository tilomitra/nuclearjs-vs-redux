import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";

import HomePage from "./components/home";

const routes = (
    <Router>
        <Route path="/" name="home" component={HomePage} />
    </Router>
);

//ENRTY POINT
//render the view
render(routes, document.getElementById("main"));
