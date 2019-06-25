import React from "react";
import { Col } from "shards-react";
// import { Link } from "react-router-dom";
import "./style.css";

function Avatar(props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="avatar-img" src={props.img} alt="stock avatar" onClick={props.handleClick}/>
    </Col>
  );
}

export default Avatar;
