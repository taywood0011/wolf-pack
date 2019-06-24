import React, { Component } from "react";
import { Container, Row } from "shards-react";
import Category from "../Category";
import "./style.css";
import API from "../../utils/API"

class CategoryPage extends Component {
  state = {
    categories: [],
    dest: this.props.location.pathname.substring(1, 5)
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    API.showCategories()
      .then(res => this.setState({ categories: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    
    console.log(this.props)

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

export default CategoryPage;
