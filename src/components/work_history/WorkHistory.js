import React, { Component } from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Chip, Avatar } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const Div = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  margin: auto 0;
  height: 90vh;
  width: 100vw;
  background-color: #59626282;
  padding: 1em 1em 0em 1em;
  overflow: scroll;
`;

const Divs = styled.div`
  width: '100%';
`;

const Typographys = styled(Typography)``;

const Box1 = styled.div`
  opacity: 0.25;
  z-index: 0;
  position: absolute;
  align-content: center;
`;

const Box2 = styled.div`
  z-index: 1;
  position: relative;
  text-align: start;
`;

const Box3 = styled.div`
position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem 0;
  flex-flow: row wrap;
  flex-grow: 1;
  width: 10vw;
`;

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const WorkHistory = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log('asda');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Div>
      <Divs>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typographys>SIT CRAFT CAMP #1</Typographys>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box1>
              <img src='logo192.png' alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Alice <br />
                Sub-Team: Infrastructure <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Docker'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='CENTOS7'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='NGINX'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='PM2'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Jenkins'
                    onDelete={handleOpen}
                    color='primary'
                  />
                </Box3>
              </Typographys>
            </Box2>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typographys>HelloWorld Beaver</Typographys>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box1>
              <img src='logo192.png' alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Game Developer <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Phaser Js'
                    onDelete={handleOpen}
                    color='primary'
                  />
                </Box3>
              </Typographys>
            </Box2>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typographys>HelloWorld Cockatiel</Typographys>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box1>
              <img src='logo192.png' alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Game Developer <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Phaser Js'
                    onDelete={handleOpen}
                    color='primary'
                  />
                </Box3>
              </Typographys>
            </Box2>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typographys>WIP Camp #11</Typographys>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box1>
              <img src='wipcamp11.png'  style={{width: "50vw"}} alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Infrastructure <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='CENTOS7'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Jenkins'
                    onDelete={handleOpen}
                    color='primary'
                  />
                </Box3>
              </Typographys>
            </Box2>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typographys>WIP Camp #12</Typographys>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box1>
              <img src='wipcamp12.png' style={{width: "55vw"}} alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Game Developer <br />
                Role: Leader <br />
                Tools: <br />
                <Box3>
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='React Js'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='spring-boot-192.png' />}
                    label='SpringBoot'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Line Login API'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Line Messaging API'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Line LIFF'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chip
                    avatar={<Avatar alt='Natacha' src='logo192.png' />}
                    label='Line Rich Menu'
                    onDelete={handleOpen}
                    color='primary'
                  />
                </Box3>
              </Typographys>
            </Box2>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br/><br/><br/>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Error</h2>
            <p id='transition-modal-description'>Permission denied!! ;)</p>
          </div>
        </Modal>
      </Divs>
    </Div>
  );
};

export default WorkHistory;
