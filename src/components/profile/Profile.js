import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    position: relative;
    justify-items: center;
    margin: auto 0;
    height: 90vh;
    width: 100vw;
    background-color: #59626282;
`
const Img = styled.img`
  border-radius: 50%;
  width: 20rem;
  position: relative;
  margin-top: 3em;
`;

const P = styled.p`
    margin: 0 auto;
`

export default class Profile extends Component {
    render() {
        return (
            <Div>
                <Img src='https://avatars3.githubusercontent.com/u/31593971?s=400&u=ed8a044aa68008e06ad83be76e67c7a2d789937d&v=4' />
                <P>Apiwat Aeeabundit</P>
                <P>Student <br/>
                @IT, SIT, KMUTT</P>
                <P>Web Developer</P>
            </Div>
        )
    }
}
