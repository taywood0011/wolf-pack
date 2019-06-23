import React from "react";
import UserContext from "../../context/UserContext";

const HomePage = props => (
  <UserContext.Consumer>
    {context => renderHomePage(props, context)}
  </UserContext.Consumer>
);

function renderHomePage(props, context) {
  return (
    <div>
      <h1>Home Page (protected)</h1>
      <h2>Welcome, {context.user.username}!</h2>
    </div>
  );
}

export default HomePage;
