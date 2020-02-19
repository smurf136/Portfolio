import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import Profile from './profile/Profile';
import Skills from './skill/Skills';
import Contact from './contact/Contact';
import WorkHistory from './work_history/WorkHistory';
import Feedback from './feedback/Feedback';
import { Grid } from '@material-ui/core';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Div = styled.div`
display: grid;
grid-template-columns: 1fr
  border: 1px solid #fffff;
  height: 100vh!important;
  margin: 0em auto 0em auto;
  justify-content: center;
  padding: 0!important;
`;

const P = styled.p`
  font-size: 35px;
`;

const Bar = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  bottom: 0;
  left: 0;
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
  background-color: wheat;
  z-index: 2;
`;
const Img = styled.img`
  height: 7vh;
  width: 7vh;
  margin: auto;
`;

export default class index extends Component {
  state = {
    screen: 'skill'
  };

  handleAction(action) {
    switch (action) {
      case 'home':
        this.setState({
          screen: 'profile'
        });
        break;
      case 'skill':
        this.setState({
          screen: 'skill'
        });
        break;
      case 'work history':
        this.setState({
          screen: 'work history'
        });
        break;
      case 'contact':
        this.setState({
          screen: 'contact'
        });
        break;
      case 'feedback':
        this.setState({
          screen: 'feedback'
        });
      default:
    }
  }

  render() {
    return (
      <Div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>{this.state.screen.toUpperCase()}</NavbarBrand>
          <NavbarToggler onClick={console.log('click')} />
          <Collapse isOpen={console.log('isopen')} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/components/'>Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.screen === 'profile' ? (
          <Profile />
        ) : this.state.screen === 'skill' ? (
          <>
            <Skills src='logo192.png' name='React JS' level='Basic' />
          </>
        ) : this.state.screen === 'contact' ? (
          <>
            <Contact />
          </>
        ) : this.state.screen === 'work history' ? (
          <>
            <WorkHistory />
          </>
        ) : this.state.screen === 'feedback' ? (
          <>
            <Feedback />
          </>
        ) : (
          ''
        )}
        <Bar>
          <button onClick={() => this.handleAction('home')}>
            <Img src='face-24px.svg' alt={this.state.alt} />
          </button>
          <button onClick={() => this.handleAction('skill')}>
            <Img src='work-24px.svg' alt={this.state.alt} />
          </button>
          <button onClick={() => this.handleAction('work history')}>
            <Img src='resume.png' alt={this.state.alt} />
          </button>
          <button onClick={() => this.handleAction('contact')}>
            <Img src='perm_phone_msg-24px.svg' />
          </button>
          <button onClick={() => this.handleAction('feedback')}>
            <Img src='feedback-24px.svg' />
          </button>
        </Bar>
      </Div>
    );
  }
}
