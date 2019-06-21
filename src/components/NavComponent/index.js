import React from "react";
import { Link } from "react-router-dom";
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
        <NavbarBrand href="/">The Tundra</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar className="ml-auto">
            <Dropdown open={this.state.packsOpen} toggle={this.togglePacks}>
              <DropdownToggle nav caret>
                Packs
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>My Packs</DropdownItem>
                <DropdownItem>
                  <span>
                    <Link
                      to="/packCategories"
                      className={
                        window.location.pathname === "/packCategories"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Browse Packs
                    </Link>
                  </span>
                </DropdownItem>
                <DropdownItem>
                <Link
                to="/profile"
                className={
                  window.location.pathname === "/newPack"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                New Pack
              </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown open={this.state.howlsOpen} toggle={this.toggleHowls}>
              <DropdownToggle nav caret>
                Howls
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>My Howls</DropdownItem>
                <DropdownItem>
                <Link
                to="/howlCategories"
                className={
                  window.location.pathname === "/howlCategories"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Browse Howls
              </Link>
                </DropdownItem>
                <DropdownItem>
                <Link
                to="/profile"
                className={
                  window.location.pathname === "/newHowl"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                New Howl
              </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <NavItem>
              <Link
                to="/profile"
                className={
                  window.location.pathname === "/profile"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Profile
              </Link>
            </NavItem>

            <NavItem>
              <NavLink href="#">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
