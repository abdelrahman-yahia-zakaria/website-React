import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// NAVIGATION
import App1 from "./App";
// PAGES
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import ChatConnect from "./pages/ChatConnect"

import "./App";

const App = () => (
  <div>
    <App1 />
    <div className="image">
      <div className="screenFrame">
        <div className="screenInset">
          <Route exact={true} path="/" component={Home} />
          <Route exaxt path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/ChatConnect.io" component={ChatConnect}/>
        </div>
      </div>
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
