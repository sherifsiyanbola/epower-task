import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Post from "./components/Post";

class App extends Component {
    render() {
        return ( <
            Router >
            <
            div >
            <
            nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <
            ul className = "navbar-nav mr-auto" >
            <
            li > { " " } <
            Link to = { "/" }
            className = "nav-link" > { " " } <
            h1 className = "text-center" > Epower Blog < /h1>{" "} <
            /Link>{" "} <
            /li>{" "} <
            /ul>{" "} <
            /nav>{" "} <
            div className = "container" >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Home }
            />{" "} <
            Route path = "/page/:id"
            exact component = { Post }
            />{" "} <
            /Switch>{" "} <
            /div>{" "} <
            /div>{" "} <
            /Router>
        );
    }
}

export default App;