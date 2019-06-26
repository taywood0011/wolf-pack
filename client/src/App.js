import React, { Component } from "react";
import Tundra from "./components/Tundra";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import InputInfo from "./components/InputInfo";
import ProtectedRoute from "./components/LoginComponent/ProtectedRoute";
import NavComponent from "./components/NavComponent";
import LoginComponent from "./components/LoginComponent";
import UserContext from "./context/UserContext";
import HomePage from "./components/LoginComponent/Homepage";
import PackPage from "./components/PackPage";
import CreatePack from "./components/CreatePack";
import Auth from "./utils/Auth"

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  refreshLogIn() {
    const local = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token")
    };
    console.log("User in storage:", local);
    if (!Auth.isLoggedIn) {
      this.setUser(local);
    }
  }

  componentDidMount() {
    const local = {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token")
    };
    console.log("User in storage:", local);
    if (local.username.length) {
      this.setUser(local);
    }
  }

  render() {
    this.refreshLogIn()
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <UserContext.Provider value={{ setUser, user }}>
            <NavComponent />
            <Route exact path="/packCategories" component={CategoryPage} />
            <Route exact path="/howlCategories" component={CategoryPage} />

            <Route path="/newHowl" component={CreatePack} />
            <Route path="/newPack" component={CreatePack} />
            <Route
              exact
              path="/howls/:category"
              render={props => <Tundra currentDisplay="howls" {...props} />}
            />
            <Route
              exact
              path="/howls/authors/:author"
              render={props => <Tundra currentDisplay="userhowls" {...props} />}
            />
            <Route
              exact
              path="/packs/:category"
              render={props => <Tundra currentDisplay="packs" {...props} />}
            />
            <Route
              exact
              path="/packs/user/:member"
              render={props => <Tundra currentDisplay="userpacks" {...props} />}
            />
          </UserContext.Provider>
          <Route
            exact
            path="/pack/:id"
            render={props => <PackPage currentDisplay="packPage" {...props} />}
          />

          <UserContext.Provider value={{ setUser, user }}>
            <ProtectedRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginComponent} />
            <Route path="/profile" component={InputInfo} />
          </UserContext.Provider>
          <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App;
