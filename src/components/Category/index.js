import React from "react";
import { Col } from "shards-react";
import "./style.css";

function Category(props) {
  return (
    <Col sm="12" md="4" lg="3">
      <img className="category-img" src={props.image} alt={props.title} />
      <div className={`category-center fas fa-${props.icon} fa-5x`} />
      <div href="#" className="category-title">
        {props.title}
      </div>
    </Col>
  );
}

export default Category;
