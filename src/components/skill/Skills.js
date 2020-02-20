import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Div = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto 3em auto;
`;

const Container = styled.div`
  position: relative;
  margin: auto 0;
  height: 80vh;
  width: 100vw;
  background-color: #59626282;
  overflow: scroll;
`;

export default class Skills extends Component {
 
  render() {
    return (
      <Container>
        <Div>
          <Card src='logo192.png' name='React Js' level='Normal' />
          <Card src='java-192.png' name='Java' level='Basic' />
          <Card src='spring-boot-192.png' name='Spring Boot' level='Normal' />
        </Div>
      </Container>
    );
  }
}
