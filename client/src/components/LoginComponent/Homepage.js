import React from "react";
import UserContext from "../../context/UserContext";
import "./styles.css";

const HomePage = props => (
  <UserContext.Consumer>
    {context => renderHomePage(props, context)}
  </UserContext.Consumer>
);

function renderHomePage(props, context) {
  return (
    <div className="intro">
      <h3>Welcome, {context.user.username}!</h3>
	  <div>
		  <h2>No more lone wolves</h2>
		  <p>Find a pack based on your interests. More description goes here</p>
	  </div>
    </div>
  );
}

export default HomePage;
