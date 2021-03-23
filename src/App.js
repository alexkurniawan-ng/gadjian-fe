import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from './pages/Home';

const App = (props) => {

  return (
    <div>
      <Route path='/' component={Home} exact />
    </div>
  )
}

export default App;

