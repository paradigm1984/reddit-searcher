import React, { Component } from "react";
import { Col, Row, Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";


class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Container className="header-img-container" fluid={true}>
        <Navbar className="nav-bar" light toggleable>
          <NavbarToggler className="toggler-color" right onClick={this.toggle} />
          <NavbarBrand className="nav-brand" href="/"> Subreddit Searcher </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="link-nav" href="./#/home"> Portfolio </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link-nav" href="./#/web-development"> Link 2 </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link-nav" href="./#/graphic-design"> Link 3 </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link-nav" href="./#/blog"> Link 4 </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default Header;
