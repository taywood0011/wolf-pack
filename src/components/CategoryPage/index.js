import React, { Component } from "react";
import { Container, Row } from "shards-react";
import Category from "../Category"
import "./style.css";

class CategoryPage extends Component {

state= {
    categories: [
        {
          image: "http://placekitten.com/300/300",
          title: "Pets",
          icon: "paw"
        },
        {
          image: "http://placekitten.com/300/300",
          title: "Pets",
          icon: "paw"
        },
        {
          image: "http://placekitten.com/300/300",
          title: "Pets",
          icon: "paw"
        },
        {
          image: "http://placekitten.com/300/300",
          title: "Pets",
          icon: "paw"
        }
      ]
}
render() {
    return (
      
        <Container className="category-container" >
        <Row>
          {this.state.categories.map(category => (
            <Category
              image={category.image}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </Row>
      </Container>
    
    );
  
}
}

export default CategoryPage;
