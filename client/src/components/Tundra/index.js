import React from "react";
import { Container } from "shards-react";
import ItemCard from "../ItemCard";
import PackPage from "../PackPage";
import "./styles.css";

class Tundra extends React.Component {
  state = {
    data: []
  };

  getCardData() {
    switch (this.props.currentDisplay) {
      case "howls":
        // insert database call using category in state

        /*
        API.getHowls({category: this.props.match.params.category})
        .then(res => {
            this.setState({
                data: res.map(item => {
                        return {...item, btnAction: "Invite", clickFn=this.inviteHowl}
                    }
                } 
            })
        })
        */

        // dummy data instead
        this.setState({
          data: [
            {
              id: 1,
              img: "",
              title: "Looking for group!!!1!",
              body:
                "ISO an airbud/electro-swing fan group. Both would be ideal, but either would work.",
              category: this.props.match.params.category,
              btnAction: "Invite",
              type: "howl"
            },
            {
              id: 2,
              img: "",
              title: "Looking for group!!!1!",
              body:
                "ISO an airbud/electro-swing fan group. Both would be ideal, but either would work.",
              category: this.props.match.params.category,
              btnAction: "Invite",
              type: "howl"
            }
          ]
        });
        return null;

      case "packs":
        // insert database call using category in state

        /*
        API.getGroups({category: this.props.match.params.category})
            .then(res => {
                this.setState({
                    data: res.map(item => {
                            return {...item, btnAction: "Join", clickFn=this.joinGroup}
                        }
                    } 
                })
            })
        */

        // dummy data instead
        this.setState({
          data: [
            {
              id: 1,
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              category: this.props.match.params.category,
              btnAction: "Join",
              type: "pack"
            },
            {
              id: 2,
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              category: this.props.match.params.category,
              btnAction: "Join",
              type: "pack"
            },
            {
              id: 2,
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              category: this.props.match.params.category,
              btnAction: "Join",
              type: "pack"
            },
            {
              id: 2,
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              category: this.props.match.params.category,
              btnAction: "Join",
              type: "pack"
            },
            {
              id: 2,
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              category: this.props.match.params.category,
              btnAction: "Join",
              type: "pack"
            },
            {
              id: 2,
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              category: this.props.match.params.category,
              btnAction: "Join",
              type: "pack"
            }
          ]
        });
        return null;

      default:
    }
  }

  componentDidMount() {
    this.getCardData();
  }

  render() {
    return (
      <>
        <PackPage />
        <Container>
          <div className="tundraDisplay">
            {/* Add conditional logic for rendering either this.state.data in ItemCards or the home page */}
            {this.props.currentDisplay === "home" ? (
              <div className="tundra-home">{/* Homepage */}</div>
            ) : (
              this.state.data.map(card => {
                return <ItemCard key={card.id} {...card} />;
              })
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default Tundra;
