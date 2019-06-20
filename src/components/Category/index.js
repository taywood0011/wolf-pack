import React from "react";
import { Container, Row, Col } from "shards-react";
import "./style.css";

function Category(props) {

    return (
      <Container>
        <Row>
            <Col>
            <img src={props.image} alt={props.title} />
          <div className={`category-center fas fa-${props.icon} fa-5x`} />
          <div href="#" className="category-title">
            {props.title}
          </div>
            </Col>
        </Row>
      </Container>
    );
  
}

export default Category;
