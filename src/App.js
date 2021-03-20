import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';

const App = (props) => {

  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </div>
  )
}
 
export default App;

