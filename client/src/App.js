import React, { Component } from "react";
import Tundra from "./components/Tundra";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import InputInfo from "./components/InputInfo";
import NavComponent from "./components/NavComponent";
import LoginComponent from "./components/LoginComponent";
import HomePage from "./components/LoginComponent/Homepage";
import PackPage from "./components/PackPage";
import CreatePack from "./components/CreatePack";
import InviteGroupPage from "./components/InviteGroupPage"
import Auth from "./utils/Auth";
import API from "./utils/API";

class App extends Component {
  state = {};

  setUser = user => {
    this.setState({
      user
    });
  };

  componentDidMount() {
    Auth.checkPreviousSession(this.setUser);
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;

    const howlData = {
      label: "Howl",
      categoryList: "/howlCategories",
      newCategory: "/newHowl",
      avatars: "/newHowl/avatar",
      categoryPrefix: "howls",
      postApi: API.postHowl
    };

    const packData = {
      label: "Pack",
      categoryList: "/packCategories",
      newCategory: "/newPack",
      avatars: "/newPack/avatar",
      categoryPrefix: "packs",
      postApi: API.postPack
    };

    if (user) {
      return (
        <Router>
          <NavComponent setUser={setUser} user={user} />

          <Route
            path={howlData.categoryList}
            render={props => (
              <CategoryPage {...props} {...howlData} user={user} />
            )}
          />
          <Route
            path={packData.categoryList}
            render={props => (
              <CategoryPage {...props} {...packData} user={user} />
            )}
          />

          <Route
            path={howlData.newCategory}
            render={props => (
              <CreatePack {...props} {...howlData} user={user} />
            )}
          />
          <Route
            path={packData.newCategory}
            render={props => (
              <CreatePack {...props} {...packData} user={user} />
            )}
          />

          <Route
          exact
            path="/howls/:category"
            render={props => (
              <Tundra currentDisplay="howls" {...props} user={user} />
            )}
          />
          <Route
            path="/howls/authors/:author"
            render={props => (
              <Tundra currentDisplay="userhowls" {...props} user={user} />
            )}
          />
          <Route
            exact
            path="/packs/:category"
            render={props => (
              <Tundra currentDisplay="packs" {...props} user={user} />
            )}
          />
          <Route
            path="/packs/user/:member"
            render={props => (
              <Tundra currentDisplay="userpacks" {...props} user={user} />
            )}
          />
          <Route
            path="/pack/:id"
            render={props => (
              <PackPage currentDisplay="packPage" {...props} user={user} />
            )}
          />
          <Route
           // exact
           path="/howl/:id/invite"
           render={props => (
             <InviteGroupPage {...props} user={user} />
           )}
         />

          <Route
            exact
            path="/"
            render={props =>
              user ? (
                <HomePage {...props} user={user} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          
          <Route
            exact
            path="/login"
            render={props =>
              user ? (
                <Redirect to="/" />
              ) : (
                <LoginComponent setUser={setUser} {...props} />
              )
            }
          />

          <Route
            path="/profile"
            render={props => (
              <InputInfo {...props} setUser={this.setUser} user={user} />
            )}
          />

          <FooterComponent />
        </Router>
      );
    } else {
      return (
        <Router>
          <NavComponent setUser={setUser} user={user} />
          <Route
            exact
            path="/"
            render={props => <Redirect to="/login" />}
          />
          <Route
            exact
            path="/login"
            render={props => <LoginComponent setUser={setUser} {...props} />}
          />
          <Route
            path="/profile"
            render={props => <InputInfo {...props} setUser={this.setUser} user={user} />}
          />
          <FooterComponent />
        </Router>
      );
    }
  }
}

export default App;
