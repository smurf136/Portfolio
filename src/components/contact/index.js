import React, { Component } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: '47vh',
    backgroundColor: theme.palette.background.paper
  }
}));

const Div = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  margin: auto 0;
  height: 75vh;
  width: 100vw;
  background-color: #59626282;
  padding-top 1em;

  @media (min-width: 1200px){
    height: 82vh;
  }
`;

const Index = () => {
  const classes = useStyles();

  return (
    <Div>
      <List className={classes.root}>
        <ListItem onClick={() => window.location.href='tel://0969622249'}>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Telephone Number' secondary='095-739-2420' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem onClick={() => window.location.href='mailto://apiwat.sun.90@gmail.com'}>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Email' secondary='apiwat.sun.90@gmail.com' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem onClick={() => window.location.href='https://www.github.com/smurf136'}>
          <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Github' secondary='smurf136' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem onClick={() => window.location.href='https://www.linkedin.com/in/apiwat-aeeabundit-1261351a1/'}>
          <ListItemAvatar>
            <Avatar>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='LinkedIn' secondary='Apiwat Aeeabundit' />
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem onClick={() => window.location.href='https://www.facebook.com/apiwatsun90'}>
          <ListItemAvatar>
            <Avatar>
              <FacebookIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Facebook' secondary='Apiwat Aeeabundit' />
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    </Div>
  );
};

export default Index;
