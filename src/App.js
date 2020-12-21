import { Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";
import SkillsPage from "./containers/SkillsPage";
import PortfolioPage from "./containers/PortfolioPage";
import ContactPage from "./containers/ContactPage";
import Layout from "./hoc/Layout";
import { ToastProvider } from "react-toast-notifications";
function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Switch>
          <Layout>
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/" exact component={HomePage} />
          </Layout>
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default App;
