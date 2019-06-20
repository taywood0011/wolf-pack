import React, {Component} from 'react';
import NavComponent from "./components/NavComponent"
import Category from './components/Category';

class App extends Component {

state = {
  categories: [
    {
      image: "http://placekitten.com/300/300",
      title: "Pets",
      icon: "paw"
  },
  ]
}

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



  render () {
    return (
      <>
      <NavComponent/>
      {this.state.categories.map(category => (
        <Category 
      image={category.image}
      title={category.title}
      icon={category.icon}
      /> 
      ))}
    </>
    )
  
  };
}

export default App;
