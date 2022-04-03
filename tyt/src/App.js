import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./Main";
import History from "./History";
import categoryJson from "./category.json";
import contentsJson from "./contents.json";
import Search from "./Search";

function App() {
  const [category, setCategory] = useState([]);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDatas = async () => {
    setCategory(categoryJson);
    setContents(contentsJson);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    console.log("category :", category);
    console.log("contents :", contents);
  }, [category, contents]);

  return (
    <Router>
      <Switch>
        <Route path="/who">
          <History />
        </Route>
        <Route path="/search">
          <Search contents={contents} />
        </Route>
        <Route
          path="/"
          render={(props) => (
            <Main
              category={category}
              contents={contents}
              setCategory={setCategory}
              setContents={setContents}
              loading={loading}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
