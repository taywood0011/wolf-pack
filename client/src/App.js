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

class App extends Component {
  // ==================================================
  // LOGIC FOR LOADING CATEGORY CARDS SHOULD GO HERE

  // componentDidMount() {
  //      this.loadCategories();
  //  }
  //  loadCategories = () => {
  //     API.getCategories()
  //     .then(res =>
  //       this.setState({ category: res.data, image: "", icon: ""})
  //     )
  //     .catch(err => console.log(err));
  //  }
  // ==================================================

  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };
  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <UserContext.Provider value={{ setUser, user }}>
            <NavComponent />
          </UserContext.Provider>
          <Route exact path="/packCategories" component={CategoryPage} />
          <Route exact path="/howlCategories" component={CategoryPage} />
          <Route exact path="/profile" component={InputInfo} />
          <Route exact path="/newHowl" component={InputInfo} />
          <Route exact path="/newPack" component={InputInfo} />
          <Route
            exact
            path="/noplease"
            render={() => <Tundra currentDisplay="home" />}
          />
          <Route
            exact
            path="/howls/:category"
            render={props => <Tundra currentDisplay="howls" {...props} />}
          />
          <Route
            exact
            path="/howls/authors/:author"
            render={props => <Tundra currentDisplay="howls" {...props} />}
          />
          <Route
            exact
            path="/packs/:category"
            render={props => <Tundra currentDisplay="packs" {...props} />}
          />

          <UserContext.Provider value={{ setUser, user }}>
            <ProtectedRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginComponent} />
          </UserContext.Provider>

          <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App;
