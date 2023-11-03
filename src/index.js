import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import App1 from "./App";
// PAGES
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

import "./App";

const App = () => (
  <div>
    <App1 />


    
    <div class="screenFrame">
    <div class="screenInset">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
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
