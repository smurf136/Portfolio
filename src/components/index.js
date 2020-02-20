import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './profile/Profile';
import Skills from './skill/Skills';
import Contact from './contact/Contact';
import WorkHistory from './work_history/WorkHistory';
import Feedback from './feedback/Feedback';
import { Navbar, NavbarBrand } from 'reactstrap';

const Div = styled.div`
display: grid;
grid-template-columns: 1fr
  border: 1px solid #fffff;
  height: 100vh!important;
  margin: 0em auto 0em auto;
  justify-content: center;
  padding: 0!important;
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

const Nav = styled(Navbar)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  margin-top: 0;
  padding: 0!important;
`;

const Button = styled.button`
  background-color: white; 
  border: none;
  color: white;
`;

export default class index extends Component {
  state = {
    screen: 'profile'
  };

  handleAction(action) {
    if (action === 'home') {
      this.setState({
        screen: 'profile'
      });
    } else if (action === 'skill') {
      this.setState({
        screen: 'skill'
      });
    } else if (action === 'work history') {
      this.setState({
        screen: 'work history'
      });
    } else if (action === 'contact') {
      this.setState({
        screen: 'contact'
      });
    } else if (action === 'feedback') {
      this.setState({
        screen: 'feedback'
      });
    }
  }

  render() {
    return (
      <Div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>{this.state.screen.toUpperCase()}</NavbarBrand>
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
            <Feedback db={this.props.db} />
          </>
        ) : (
          ''
        )}
        
        <Nav>
          <Button onClick={() => this.handleAction('home')}>
            <Img src='face-24px.svg' alt={this.state.alt} />
          </Button>
          <Button onClick={() => this.handleAction('skill')}>
            <Img src='work-24px.svg' alt={this.state.alt} />
          </Button>
          <Button onClick={() => this.handleAction('work history')}>
            <Img src='resume.png' alt={this.state.alt} />
          </Button>
          <Button onClick={() => this.handleAction('contact')}>
            <Img src='perm_phone_msg-24px.svg' />
          </Button>
          <Button onClick={() => this.handleAction('feedback')}>
            <Img src='feedback-24px.svg' />
          </Button>
        </Nav>
      </Div>
    );
  }
}
