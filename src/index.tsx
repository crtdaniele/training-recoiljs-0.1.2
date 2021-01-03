import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import DebugObserver from "./helpers/storeRecoilDebug";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <RecoilRoot>
    <DebugObserver />
    <Router>
      <Switch>
        <Route path='/' exact>
          <App />
        </Route>
        <Route path='/test' exact>
          <>
            <div>
              <Link to='/'>Home</Link>
            </div>
          </>
        </Route>
      </Switch>
    </Router>
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
