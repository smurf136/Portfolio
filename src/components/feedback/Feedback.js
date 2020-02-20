import React, { Component } from 'react';
import styled from 'styled-components';
import trim from 'trim';

const Div = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  margin: auto 0;
  height: 75vh;
  width: 100vw;
  background-color: #59626282;
`;

const Form = styled.form`
    justify-content: center;
    margin: auto;
    width: 50vw;
`


export default class Feedback extends Component {
  state = {
    feedbacks: ''
  };

  onChange(e) {
    console.info(e);
    this.setState({
      feedbacks: e.target.value
    });
  }

  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      //   e.preventDefault();
      let dbCon = this.props.db.database().ref('/feedback');
      dbCon.push({
        feedback: trim(e.target.value)
      });
      this.setState({
        feedback: ''
      });
    }
  }

  test() {
    let dbCon = this.props.db.database().ref('/feedback');
    dbCon.push({
      feedback: trim(this.state.feedback)
    });
    this.setState({
      feedbacks: ''
    });
  }

  render() {
    return (
      <Div>
        <Form>
          <textarea
            className='textarea'
            placeholder='Type a message'
            style={{
                borderRound: "25%",
                margin: 'auto'
            }}
            onChange={this.onChange.bind(this)}
            onKeyUp={this.onKeyup.bind(this)}
            value={this.state.feedbacks}
          ></textarea>
          <hr/>
          <p>Press enter to submit.</p>
        </Form>
      </Div>
    );
  }
}
