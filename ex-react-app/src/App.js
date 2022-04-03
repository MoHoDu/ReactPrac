import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          {/* :id -> /id값으로 전달 */}
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
