import React from "react";
import { Container} from "shards-react";
import ItemCard from "../ItemCard";

class Tundra extends React.Component {

  state = {
    data: []
  };

  getCardData() {
    switch (this.props.currentDisplay) {
      case "howls":
        // insert database call using category in state

        /*
        API.getHowls({category: this.props.category})
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
              img: "",
              title: "Looking for group!!!1!",
              body:
                "ISO an airbud/electro-swing fan group. Both would be ideal, but either would work.",
              btnAction: "Invite",
              clickFn: this.inviteHowl
            },
            {
              img: "",
              title: "Looking for group!!!1!",
              body:
                "ISO an airbud/electro-swing fan group. Both would be ideal, but either would work.",
              btnAction: "Invite",
              clickFn: this.inviteHowl
            }
          ]
        });
        return null;

      case "groups":
        // insert database call using category in state

        /*
        API.getGroups({category: this.props.category})
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
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              btnAction: "Join", 
              clickFn: this.joinGroup
            },
            {
              img: "",
              title: "Forming Electro-Swing Band",
              body:
                "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
              btnAction: "Join",
              clickFn: this.joinGroup
            }
          ]
        });
        return null;

      default:
      //make default page shit
    }
  }

  joinGroup() {
    console.log("requested")
  }

  inviteHowl() {
    console.log("invited")
  }

  componentDidMount() {
      this.getCardData()
  }

  render() {

    console.log("hello")
    return (
      <Container>
        {/* Add conditional logic for rendering either this.state.data in ItemCards or the home page */}
        {this.props.currentDisplay === "home" ? (
            <div>{/* Homepage */}</div>
        ) : (
            this.state.data.map(card => {
                return <ItemCard {...card} />
        }))}
      </Container>
    );
  }
}

export default Tundra; /*
<ItemCard
    img=""
    title="Forming Electro-Swing Band"
    body="We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!"
    clickFn={function() {
    // joinGroup
    this.toggle();
    }}
/>
*/

/*
{/* Group ad Example */
