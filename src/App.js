import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';
import About from './components/About';

// import history from './history'

function App() {
  return (
    <div className='ui container'>
      <Router>
      {/* <Router history={history}> */}
        <Header />
        <Switch>
          <Route path='/test' exact component={Test} />
          <Route path='/about' exact component={About} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
