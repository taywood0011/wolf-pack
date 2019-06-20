import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProtectedRoute from "./components/LoginComponent/ProtectedRoute";
import NavComponent from "./components/NavComponent"
import LoginComponent from "./components/LoginComponent"
import UserContext from "./context/UserContext";
import HomePage from "./components/LoginComponent/Homepage";


class App extends Component {
  state = {
    user: null
  }

  setUser = (user) => {
	  this.setState({ user });
  } 

 render() {
  const {user} = this.state;
	const setUser = this.setUser;
  return (
    <Router>
    <>
      <LoginComponent> 
      	<UserContext.Provider value={{ setUser, user }}>
          <ProtectedRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginComponent} />
       </UserContext.Provider>
       </LoginComponent>
      <NavComponent />
    
    </>
    </Router>
  );
} 
}

export default App;
