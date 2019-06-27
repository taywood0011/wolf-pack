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
          console.log(this.props.match.params.category);
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
            console.log("Getting user packs for some frickin reason", this.props.match.params.member)
            this.setState({
              data: res.data.map(item => {
                return {
                  ...item,
                  btnAction: "Invite",
                  clickFn: this.showPack,
                  type: "mypack"
                };
              })
            });
          });
          break;
      default:
        console.log("oops");
        break;
      }
  }

  componentDidMount() {
    this.getCardData();
  }

  render() {
    console.log("Tundra state: ", this.state.data);
    console.log('TUNDRA', this.props);
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
                return <ItemCard key={card._id} {...card} user={this.props.user} forceRender={this.getCardData}/>;
              })
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default Tundra;
