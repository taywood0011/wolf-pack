import React from "react"

import { Col } from "shards-react";
import "./style.css";

function PackMember (props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="pack-img" src={props.packMemberImg} alt={props.name} />
      <p className="pack-title">
        {props.name} || {props.location}
      </p>
    </Col>
  );
}

export default PackMember;