import React from "react";
import PackChat from "../PackChat"
import PackDesc from "../PackDesc"
import { Container, Modal, ModalBody, ModalHeader } from "shards-react";
import {
  Row,
} from "shards-react";
import PackMember from "../PackMember";
import PackHeader from "../PackHeader";
import API from "../../utils/API";
import "./style.css"
// import NewMessage from "../NewMessage";


class PackPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openEdit: false,
      openProfile: false,
      title: "",
      image: "",
      catagory: "",
      description: "",
      members: [],
      chat: []
    };
  }

  toggleEdit = () => {
    this.setState({
      openEdit: !(this.state.openEdit)
    })
  }
  toggleProfile = () => {
    this.setState({
      openProfile: !(this.state.openProfile)
    })
  }

  loadPack = id => {
    API.getPack(id)
      .then(res => {
        console.log(res)
        this.setState({
          ...res.data
        })
      })
      .catch(err => console.log(err));
  };


     handleInputChange = event => {
       const { name, value } = event.target;
       this.setState({
         [name]: value
       });
   };

   clickHandler = e => {
    console.log(`${e.target.attributes.job.value} was clicked`)
    if(e.target.attributes.job.value === "edit"){

      this.toggle();
    }
    else if (e.target.attributes.job.value === "view") {
      // view pack member
    }
    else if (e.target.attributes.job.value === "submit"){
      // submit message to chat
    }
   }

   ///edit modal needs button to push new text to pack description.


  
   

  componentDidMount() {
    this.loadPack(this.props.match.params.id);
  }

  render() {
    return (
      <>
        {/* pack header */}
        <PackHeader title={this.state.title} />
        {/* pack description card */}
        <PackDesc category={this.state.category} image={this.state.image} description={this.state.description} clickHandler={this.clickHandler}/>
        {/* pack members */}
        <Container className="pack-member-container">
          <Row>
            {this.state.members.map(packMember => (
              <PackMember key={packMember._id} {...packMember} clickHandler={this.clickHandler} />
            ))}
          </Row>
        </Container>
        {/* pack chat */}
        <PackChat clickHandler={this.clickHandler} packID={this.props.match.params.id} {...this.props}/>

        <Modal open={this.state.openEdit} toggle={this.toggleEdit}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody> Edit Description</ModalBody>
        </Modal>

        <Modal open={this.state.openProfile} toggle={this.toggleProfile} >
          <ModalHeader>Header</ModalHeader>
          <ModalBody> Edit Description</ModalBody>
        </Modal>
      </>
    );
  }
}

export default PackPage;
