import React from "react";
import "./styles.css";

function HomePage(props) {
  return (
    <div className="intro">
      <h3>Welcome, {props.user.username}</h3>
    </div>
  );
}

export default HomePage;
