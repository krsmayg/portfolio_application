import {Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Layout from "./hoc/Layout";
function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/" exact component={HomePage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
