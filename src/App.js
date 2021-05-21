import React, {useEffect, useState} from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import {auth} from "./firebase";


const App = () => {
  const [user, setUser] = useState(null);
useEffect(() => {
     auth.onAuthStateChanged(user => {
       if(user) setUser(user);
       else  setUser(null)
     })
}, []);

  return ( <>
  
  <Navbar user={user} />
      <Switch>
        <Route exact path='/' user={user} component={Signup} />
        <Route exact path='/login' user={user} component={Login} />
        <Route exact path='/dashboard' user={user} component={Dashboard} />
        <Route exact path="/home" user={user} component={Home} />
        <Route exact path="/cart" user={user} component={Cart} />
      </Switch>
  

      </>
  );
}

export default App;
