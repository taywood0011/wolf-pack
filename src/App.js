import React, { Component } from "react";
import NavComponent from "./components/NavComponent";
import Tundra from "./components/Tundra";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import InputInfo from "./components/InputInfo";

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

  render() {
    return (
      <Router>
        <div>
          <NavComponent />
          <Route exact path="/packCategories" component={CategoryPage} />
          <Route exact path="/howlCategories" component={CategoryPage} />
          <Route exact path="/profile" component={InputInfo} />
          <Route exact path="/newHowl" component={InputInfo} />
          <Route exact path="/newPack" component={InputInfo} />
          <Route
            exact
            path="/"
            render={() => <Tundra currentDisplay="home" />}
          />
          <Route
            exact
            path="/howls/:category"
            render={(props) => <Tundra currentDisplay="howls" {...props} />}
          />
          <Route
            exact
            path="/packs/:category"
            render={(props) => <Tundra currentDisplay="packs" {...props} />}
          />
          <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App;
 