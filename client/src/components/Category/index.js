import React from "react";
import { Col } from "shards-react";
import { Link } from "react-router-dom";
import "./style.css";

function Category(props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="category-img" src={props.image} alt={props.name} />
      <div className={`category-center fas fa-${props.icon} fa-5x`} />
      <Link to={`/${props.dest}/${props.name.toLowerCase()}`} className="category-title">
        {props.name}
      </Link>
    </Col>
  );
}

export default Category;
