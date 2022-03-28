import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// browserRouter : 주소/movie
// hashRouter : 주소/#/movie
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
