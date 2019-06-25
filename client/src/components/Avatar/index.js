import React from "react";
import { Col } from "shards-react";
import "./style.css";

function Avatar(props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="avatar-img" src={props.image} alt="stock avatar" onClick={props.handleClick}/>
    </Col>
  );
}

export default Avatar;
