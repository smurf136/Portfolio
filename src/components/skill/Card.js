import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardCon = styled(Card)`
  minwidth: 250;
`;

const Div = styled.div`
  margin-top: 3rem;
  :last-child {
    margin-bottom: 5rem;
  }
`;

const Img = styled.img``;

export default class Cards extends Component {
  state = {
    src: '',
    name: '',
    level: ''
  };

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
      <Div>
        <CardCon style={{ minWidth: 345 }}>
          <CardActionArea>
            <Img src={this.state.src} alt={this.state.name} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {this.state.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Level: {this.state.level}
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardCon>
      </Div>
    );
  }
}
