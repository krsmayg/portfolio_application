import { Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import Layout from "./hoc/Layout";
function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/about" component={AboutPage} />
          <Route path="/" exact component={HomePage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
