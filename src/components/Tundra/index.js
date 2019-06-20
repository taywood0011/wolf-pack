import React from "react";
import {
  Container,
  Row,
  Col
} from "shards-react";
import ItemCard from "../ItemCard"

class Tundra extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            currentDisplay: this.props.display,
            data: []

        }

        this.render() = this.render.bind(this)
    }

    getCardData () {
        switch (this.state.currentDisplay) {
            case "howls":
                // insert database call

                // dummy data instead
                this.setState({
                    data: [
                        {
                            img: "",
                            title: "Looking for group!!!1!",
                            body: "ISO an airbud/electro-swing fan group. Both would be ideal, but either would work.",
                        }, {
                            img: "",
                            title: "Looking for group!!!1!",
                            body: "ISO an airbud/electro-swing fan group. Both would be ideal, but either would work.",
                        }
                    ],
                })
                return null;
            
            case "groups":
                // insert database call

                // dummy data instead
                this.setState({
                    data: [
                        {
                            img: "",
                            title: "Forming Electro-Swing Band",
                            body: "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
                        }, {
                            img: "",
                            title: "Forming Electro-Swing Band",
                            body: "We need a good keyboardist and of course we are always looking for other bands to practice, preform, or even just hang out with. Don't be shy!",
                        }
                    ],
                })
                return null;

            default:
                //make default page shit

        }
    }

    render () {

        <Container>
            {/* Add conditional logic for rendering either this.state.data in ItemCards or the home page */}
        </Container>

    }

}

export default Tundra

/*
{/* Group ad Example *//*
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