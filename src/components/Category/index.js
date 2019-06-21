import React from "react";
import { Col } from "shards-react";
import "./style.css";

function Category(props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="category-img" src={props.image} alt={props.title} />
      <div className={`category-center fas fa-${props.icon} fa-5x`} />
      <a href={`/${props.dest}/${props.title}`} className="category-title">
        {props.title}
      </a>
    </Col>
  );
}

export default Category;
