import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Div = styled.div`
  height: 100vh;
  margin: 0 auto 3em auto;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-items: center;
  margin: auto 0;
  height: 90vh;
  width: 100vw;
  background-color: #59626282;
  overflow: scroll;
`;

export default class Skills extends Component {

  componentDidMount() {
    if (this.state.src !== this.props.src) {
      this.setState({
        src: this.props.src,
        name: this.props.name,
        level: this.props.level
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.setState({
        src: this.props.src,
        name: this.props.name,
        level: this.props.level
      });
    }
  }

  render() {
    return (
      <Container>
        <Div>
          <Card 
          src="logo192.png"
          name="React Js"
          level="Basic"
          />
        </Div>
      </Container>
    );
  }
}
