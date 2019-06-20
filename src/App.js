import React, { Component } from "react";
import NavComponent from "./components/NavComponent";
import Category from "./components/Category";
import InputInfo from "./components/Form";
import { Container, Row } from "shards-react";

class App extends Component {
  // state representing dummy data
  state = {
    categories: [
      {
        image: "http://placekitten.com/300/300",
        title: "Pets",
        icon: "paw"
      }
    ],
    formControl: {
      description: "Tell Us About Yourself/HowlName/PackName",
      name: "Username/Howl/Pack"
    }
  };

  // ==================================================
  // LOGIC FOR LOADING CATEGORY CARDS SHOULD GO HERE

  // componentDidMount() {
  //      this.loadCategories();
  //  }
  //  loadCategories = () => {
  //     API.getCategories()
  //     .then(res =>
  //       this.setState({ category: res.data, image: "", icon: ""})
  //     )
  //     .catch(err => console.log(err));
  //  }
  // ==================================================

  render() {
    return (
      <>
        <NavComponent />
        <Container>
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

        <InputInfo
          descriptionLabel={this.state.formControl.description}
          nameLabel={this.state.formControl.name}
        />
      </>
    );
  }
}

export default App;
