import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Layout>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
