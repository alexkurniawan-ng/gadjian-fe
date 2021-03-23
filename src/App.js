import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavbarComp from './components/Navbar';
import Home from './pages/Home';

const App = (props) => {

  return (
    <div>
      {/* <NavbarComp/> */}
      {/* <Switch> */}
        <Route path='/' component={Home} exact />
      {/* </Switch> */}
    </div>
  )
}
 
export default App;

