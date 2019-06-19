import React from "react"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";

export default class NavComponent extends React.Component {
  constructor(props) {
    super(props);

    this.togglePacks = this.togglePacks.bind(this);
    this.toggleHowls = this.toggleHowls.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      packsOpen: false,
      howlsOpen: false,
      collapseOpen: false
    };
  }

  togglePacks() {
    this.setState({
      ...this.state,
      ...{
        packsOpen: !this.state.packsOpen
      }
    });
  }

  toggleHowls() {
    this.setState({
      ...this.state,
      ...{
        howlsOpen: !this.state.howlsOpen
      }
    });
  }


  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar type="light" theme="light" expand="md">
        <NavbarBrand href="#">The Tundra</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar className="ml-auto">
           
            <Dropdown
              open={this.state.packsOpen}
              toggle={this.togglePacks}
            >
              <DropdownToggle nav caret>
                Packs
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>My Packs</DropdownItem>
                <DropdownItem>Browse Packs</DropdownItem>
                <DropdownItem>New Pack</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown
              open={this.state.howlsOpen}
              toggle={this.toggleHowls}
            >
              <DropdownToggle nav caret>
                Howls
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>My Howls</DropdownItem>
                <DropdownItem>Browse Howls</DropdownItem>
                <DropdownItem>New Howl</DropdownItem>
              </DropdownMenu>
            </Dropdown>
        
            <NavItem>
              <NavLink href="#">
                Profile
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">
                Log Out
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}