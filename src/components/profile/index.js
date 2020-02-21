import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  margin: auto 0;
  height: 75vh;
  width: 100vw;
  background-color: #59626282;

  @media (min-width: 1200px){
    height: 82vh;
  }
`;
const Img = styled.img`
  border-radius: 50%;
  width: 10rem;
  position: relative;
  margin: 3em auto;
`;

const Content = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
`;

const P = styled.p`
  margin: 0 auto 1em auto;
  font-size: 25px;
`;

export default class Index extends Component {
  render() {
    return (
      <Div>
        <Img src='https://avatars3.githubusercontent.com/u/31593971?s=400&u=ed8a044aa68008e06ad83be76e67c7a2d789937d&v=4' />
        <Content>
          <P>Apiwat Aeeabundit</P>
          <P>
            Student <br />
            @IT, SIT, KMUTT
          </P>
          <P>Web Developer</P>
        </Content>
      </Div>
    );
  }
}
