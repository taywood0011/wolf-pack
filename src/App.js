import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import CategoryPage from "./components/CategoryPage";
import InputInfo from "./components/Form";


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
        </div>
      </Router>
    );
  }
}

export default App;
