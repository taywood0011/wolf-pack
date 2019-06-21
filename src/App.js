import React, { Component } from "react";
import Tundra from "./components/Tundra";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import InputInfo from "./components/InputInfo";
import ProtectedRoute from "./components/LoginComponent/ProtectedRoute";
import NavComponent from "./components/NavComponent"
import LoginComponent from "./components/LoginComponent"
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
  }

  setUser = (user) => {
	  this.setState({ user });
  }
  render() {
    const {user} = this.state;
    const setUser = this.setUser;
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
            path="/jgufjytr"
            render={() => <Tundra currentDisplay="home" />}
          />
          <Route
            exact
            path="/howls"
            render={() => <Tundra currentDisplay="howls" category="pets" />}
          />
          <Route
            exact
            path="/groups"
            render={() => <Tundra currentDisplay="groups" category="pets" />}
          />
         
          <LoginComponent> 
      	<UserContext.Provider value={{ setUser, user }}>
          <ProtectedRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginComponent} />
       </UserContext.Provider>
       </LoginComponent>
       <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App; /*
 
//Card display JSX

/*
<Container>

  /* Howl Example */ /*
 <ItemCard
    img=""
    title="Looking for group!!!1!"
    body="ISO an airbud/electro-swing fan group. Both would be ideal, but either would work."
    clickFn={function() {
      // invite()
      this.toggle();
    }}
  />

  /* Group ad Example */ /*
  <ItemCard
    img=""
    title="Forming Electro-Swing Band"
    body="We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!"
    clickFn={function() {
      // joinGroup
      this.toggle();
    }}
  />
</Container>
*/
