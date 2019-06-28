import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";
import Auth from "../../utils/Auth";

export default class NavComponent extends React.Component {
  constructor(props) {
    super(props);

    this.togglePacks = this.togglePacks.bind(this);
    this.toggleHowls = this.toggleHowls.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.renderLoggedIn = this.renderLoggedIn.bind(this);
    this.renderNotLoggedIn = this.renderNotLoggedIn.bind(this);

    this.state = {
      packsOpen: false,
      howlsOpen: false,
      collapseOpen: false
    };
  }

  togglePacks() {
    this.setState({
      ...this.state,
      packsOpen: !this.state.packsOpen
    });
  }

  toggleHowls() {
    this.setState({
      ...this.state,
      howlsOpen: !this.state.howlsOpen
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
    console.log('navbar', this.props);
    return this.props.user ? this.renderLoggedIn() : this.renderNotLoggedIn();
  }

  renderNotLoggedIn = () => {
    return (
      <Navbar type="light" theme="light" expand="md">
        <NavbarBrand href="/">Wolf Pack</NavbarBrand>
        <Collapse open={true} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Log In
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  renderLoggedIn = () => {
    const userID = this.props.user._id;
    console.log(userID)
    const username = this.props.user.username;
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
                <DropdownItem>
                  <Link to={"/packs/user/" + userID}>
                    My Packs
                  </Link>
                </DropdownItem>
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
                    to="/newPack"
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
                <DropdownItem>
                  <Link
                    to={"/howls/authors/" + username}
                  >
                    My Howls
                  </Link>
                </DropdownItem>
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
                    to="/newHowl"
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

            <NavItem onClick={this.handleLogOut}>
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Log Out
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  handleLogOut = e => {
    console.log("handleLogOut");
    Auth.logOut(() => {
      this.props.setUser(null);
    });
  };


}
