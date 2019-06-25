import React from "react"

import { Col } from "shards-react";
import "./style.css";

function PackMember (props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="user-img" src={props.avatar} alt={props.name} />
      <hr></hr>
      <p className="member-info">
        {props.name} && {props.location}
      </p>
    </Col>
  );
}

export default PackMember;