import React from 'react';
import ProductPage from './ProductPage.js';
import AboutPage from './AboutPage.js';
import IntroPage from './IntroPage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class TopMenu extends React.Component {
  render(){
      return (
          <div>
              <Router basename={window.location.pathname || ''}>
                <div>
                  <ul>
                    <li className="menu">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="menu">
                      <Link to="/product">Product</Link>
                    </li>
                  </ul>

                  <Switch>
                    <Route path="/about">
                      <AboutPage />
                    </Route>
                    <Route path="/product">
                      <ProductPage />
                    </Route>
                    <Route exact path="/">
                      <IntroPage />
                    </Route>
                    <Route exact path="/kinart">
                      <IntroPage />
                    </Route>
                  </Switch>
                </div>
              </Router>
        </div>
      )
    }
}

export default TopMenu;
