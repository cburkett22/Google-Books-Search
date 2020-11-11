import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import List from "./pages/List";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/mylist" component={List} />
        </div>
      </Router>
    </>
  );
}

export default App;