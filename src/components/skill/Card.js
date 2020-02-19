import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const CardCon = styled(Card)`
  minwidth: 250;
  margin-top: 3rem;
`;

export default class Cards extends Component {

    state = {
        src: '',
        name: '',
        level: ''
      };
      
  render() {
    return (
      <div>
        <Cards style={{ minWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              style={{ height: 150 }}
              image={this.state.src}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {this.state.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Level: {this.state.level}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Cards>
      </div>
    );
  }
}
