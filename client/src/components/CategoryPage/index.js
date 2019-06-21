import React, { Component } from "react";
import { Container, Row } from "shards-react";
import Category from "../Category";
import "./style.css";

class CategoryPage extends Component {
  state = {
    categories: [
      {
        _id: 1,
        image: "http://placekitten.com/300/300",
        title: "Pets",
        icon: "paw",
      },
      {
        _id: 2,
        image: "http://placekitten.com/300/300",
        title: "Pets",
        icon: "paw"
      },
      {
        _id: 3,
        image: "http://placekitten.com/300/300",
        title: "Pets",
        icon: "paw"
      },
      {
        _id: 4,
        image: "http://placekitten.com/300/300",
        title: "Pets",
        icon: "paw"
      }
    ],
    dest: "packs"
  };

  clickFn = () => {};

  render() {
    return (
      <Container className="category-container">
        <Row>
          {this.state.categories.map(category => (
            <Category key={category._id} dest={this.state.dest} {...category} />
          ))}
        </Row>
      </Container>
    );
  }
}

/*
image={category.image}
title={category.title}
icon={category.icon}
*/

export default CategoryPage;
