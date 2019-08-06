import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Create from "./create";
import Edit from "./edit";
import List from "./list";

// import logo from "./logo.svg";

class Tutor extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/list-tutor" className="nav-link">Tutor List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create-tutor" className="nav-link">Create Tutor</Link>
                </li>
              </ul>
            </div>
            </nav>
          <br/>
          <Route path="/list-tutor"  component={List} />
          <Route path="/edit-tutor/:id" component={Edit} />
          <Route path="/create-tutor" component={Create} />
        </div>
      </Router>
    );
  }
}

export default Tutor;