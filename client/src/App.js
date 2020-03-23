import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'



const App = () => {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} /> */}
        </Switch>
    </>
  );
}

export default App;
