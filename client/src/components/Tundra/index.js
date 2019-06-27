import React from "react";
import { Container } from "shards-react";
import ItemCard from "../ItemCard";
// import NewPackPage from "../NewPackPage";
import "./styles.css";
import API from "../../utils/API";

class Tundra extends React.Component {
  state = {
    data: []
  };

  inviteHowl = () => {};

  joinPack = (pack, user) => {};

  getCardData() {
    switch (this.props.currentDisplay) {
      case "howls":
        // insert database call using category in state

        try {
          API.getHowls(this.props.match.params.category).then(res => {
            this.setState({
              data: res.data.map(item => {
                return {
                  ...item,
                  btnAction: "Invite",
                  clickFn: this.inviteHowl,
                  type: "howl"
                };
              })
            });
          });
        } catch (err) {
          console.log(err)
        }
        break;

      case "packs":
        // insert database call using category in state

        try {
          API.getPacks(this.props.match.params.category).then(res => {
            this.setState({
              data: res.data.map(item => {
                return {
                  ...item,
                  btnAction: "Join",
                  clickFn: this.joinPack,
                  type: "pack"
                };
              })
            });
          });
        } catch (err) {
          console.log(err)
        }
        break;

        case "userhowls":
          API.getUserHowls(this.props.match.params.author).then(res => {
            this.setState({
              data: res.data.map(item => {
                return {
                  ...item,
                  btnAction: "Delete",
                  clickFn: this.deleteHowl,
                  type: "myhowl"
                };
              })
            });
          });
          break;

      case "userpacks":
          API.getUserPacks(this.props.match.params.member).then(res => {
            this.setState({
              data: res.data.map(item => {
                return {
                  ...item,
                  btnAction: "View Page",
                  clickFn: this.showPack,
                  type: "mypack"
                };
              })
            });
          });
          break;
      default:
        return null;
      }
  }

  componentDidMount() {
    this.getCardData();
  }

  render() {
    return (
      <>
        {/*}<NewPackPage />*/}
        <Container>
          <div className="tundraDisplay">
            {/* Add conditional logic for rendering either this.state.data in ItemCards or the home page */}
            {this.props.currentDisplay === "home" ? (
              <div className="tundra-home">{/* Homepage */}</div>
            ) : (
              this.state.data.map(card => {
                console.log(card)
                return <ItemCard key={card._id} {...card} user={this.props.user} history={this.props.history}/>;
              })
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default Tundra;
