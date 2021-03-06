import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardImg,
  CardBody,
} from "shards-react";
import "./styles.css";
import API from "../../utils/API";

export default class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: props.type
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  clickFn = (id, user) => {


    if (this.state.type === "howl") {

      this.props.history.push(`/howl/${this.props._id}/invite`)
      this.toggle();

    } else if (this.state.type === "pack"){
      
      //request to join

      API.getUser(user).then(function(fullUser) {

        console.log("user: ", fullUser.data);
        return API.joinPack(id, fullUser.data._id)

      }).then(response => {

          this.toggle();
          console.log("Response:", response);
          alert(`${user} joined ${response.data.title}`)
        }).catch(err => {

          console.log(err);
          this.toggle();

        });

    } else if (this.state.type === "myhowl") {
  
      API.deleteHowl(id).then(() => {
        this.props.deleteHowl(id);
      })



    } else if (this.state.type === "mypack"){ 

      this.props.history.push(`/pack/${this.props._id}`)
      
    }
  };

  render() {
    return (
      <div>
        <Card style={{ maxWidth: "300px" }} onClick={this.toggle}>
          <CardImg src={this.props.img || "https://res.cloudinary.com/dd0yofein/image/upload/v1561649782/people_mzcboq.jpg"} />
          <CardBody>
            <CardTitle>
              <p>{this.props.title || "Title"}</p>
            </CardTitle>
            <h4>{this.props.category}</h4>
            <h6>{this.props.description || "lorem ipsim dolor imet"}</h6>
            <Button
                    className="modal-button"
                    block
                    squared
                    theme="info"
                    onClick={() => {
                      this.clickFn(this.props._id, this.props.user.username);
                    }}
                  >
                    {this.props.btnAction || "Join"}
                  </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
