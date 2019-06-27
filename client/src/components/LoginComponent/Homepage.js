import React from "react";
import "./styles.css";

function HomePage(props) {
  return (
    <div className="intro">
      <h3>Welcome, {props.user.username}!</h3>
	  <div>
		  <h2>No more lone wolves</h2>
		  <p>Find a pack based on your interests. More description goes here</p>
	  </div>
    </div>
  );
}

export default HomePage;
