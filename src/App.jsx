import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';
import Article from './modules/Article/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/article/:articleId">
              <Article />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
