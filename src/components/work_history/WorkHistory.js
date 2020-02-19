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

export default class WorkHistory extends Component {
    render() {
        return (
            <Div>
                <p>WorkHistory</p>
            </Div>
        )
    }
}
