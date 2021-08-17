import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../page/Home/Home";
import Header from "../Header";
import Bottom from "../Bottom";
import Argus from "../../page/product/Argus";
import Venus from "../../page/product/Venus";
import Mars from "../../page/product/Mars";
import ZMax from "../../page/product/Z-Max/ZMax";
import ResultsSharing from "../../page/ResultsSharing";
import Partners from "../../page/Partners";
import Recruitment from "../../page/Recruitment";
import Contact from "../../page/Contact";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/argus">
            <Argus />
          </Route>
          <Route path="/venus">
            <Venus />
          </Route>
          <Route path="/mars">
            <Mars />
          </Route>
          <Route path="/z-max">
            <ZMax />
          </Route>
          <Route path="/resultssharing">
            <ResultsSharing />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/recruitment">
            <Recruitment />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
        <Bottom />
      </Router>
    </>
  );
}
