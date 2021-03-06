import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Redirect from="/" to="/login" />
      <Switch>
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage}  exact={true} />
        <Route path="/register" component={DashboardPage} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;