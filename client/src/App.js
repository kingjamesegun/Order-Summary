import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './Pages/CustomerProfile';
import Order from './Pages/Order';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          {/* PROFILE ROUTE */}
          <Route path="/profile">
            <Profile/>
          </Route>

          {/* ORDER ROUTE */}
          <Route path="/order">
            <Order/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
