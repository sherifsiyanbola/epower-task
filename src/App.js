import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Post from "./components/Post";

const navstyle = {
    backgroundColor: "#50c6db"
};

const logostyle = {
    color: "#ffffff",
    textAlign: 'center'
};

class App extends Component {
    render() {
        return ( <
            Router >
            <
            div >
            <
            nav className = "navbar navbar-expand-lg"
            style = { navstyle } >
            <
            ul className = "navbar-nav mr-auto" >
            <
            li > { " " } <
            Link to = { "/" }
            className = "nav-link" > { " " } <
            h1 className = "text-center"
            style = { logostyle } > { " " }
            Epower Blog { " " } <
            /h1>{" "} < /
            Link > { " " } <
            /li>{" "} < /
            ul > { " " } <
            /nav>{" "} <
            div className = "container" >
            <
            div className = "row" >
            <
            Switch >
            <
            Route exact path = "/"
            component = { Home }
            />{" "} <
            Route path = "/page/:id"
            exact component = { Post }
            />{" "} < /
            Switch > { " " } <
            /div>{" "} < /
            div > { " " } <
            /div>{" "} < /
            Router >
        );
    }
}

export default App;