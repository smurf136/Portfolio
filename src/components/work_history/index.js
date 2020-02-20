import React  from 'react';
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

const Div = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  margin: auto 0;
  height: 75vh;
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

const Img = styled.img`
@media (max-width: 768px) {
    width: 54vw;
  }

  @media (min-width: 768px) and (max-width: 1170px) {
    width: 50vw;
  }

  @media (min-width: 1170px) {
      width: 14vw;
  }
`;

const Chips = styled(Chip)`
  justify-content: start;
`

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
              <Img src='sitcraftcamp1.png' alt='Bg'  />
            </Box1>
            <Box2>
              <Typographys>
                Team: Alice <br />
                Sub-Team: Infrastructure <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chips
                    avatar={<Avatar alt='Docker' src='docker.png' />}
                    label='Docker'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='centos7' src='centos7.png' />}
                    label='CENTOS7'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='nginx' src='nginx.png' />}
                    label='NGINX'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='pm2' src='pm2.png' />}
                    label='PM2'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='jenkins' src='jenkins.png' />}
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
              <Img
                src='helloworldbeaver.png'
                
                alt='Bg'
              />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Game Developer <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chips
                    avatar={<Avatar alt='phaser' src='phaser.png' />}
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
              <Img
                src='helloworldcockatiel.jpg'
                
                alt='Bg'
              />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Game Developer <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chips
                    avatar={<Avatar alt='phaser' src='phaser.png' />}
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
              <Img src='wipcamp11.png'  alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Infrastructure <br />
                Role: Member <br />
                Tools: <br />
                <Box3>
                  <Chips
                    avatar={<Avatar alt='centos7' src='centos7.png' />}
                    label='CENTOS7'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='jenkins' src='jenkins.png' />}
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
              <Img src='wipcamp12.png' alt='Bg' />
            </Box1>
            <Box2>
              <Typographys>
                Team: Developer <br />
                Sub-Team: Game Developer <br />
                Role: Leader <br />
                Tools: <br />
                <Box3>
                  <Chips
                    avatar={<Avatar alt='React' src='logo192.png' />}
                    label='React Js'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='Springboot' src='spring-boot-192.png' />}
                    label='SpringBoot'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='line' src='line.png' />}
                    label='Line Login API'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='line' src='line.png' />}
                    label='Line Messaging API'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='line' src='line.png' />}
                    label='Line LIFF'
                    onDelete={handleOpen}
                    color='primary'
                  />
                  <Chips
                    avatar={<Avatar alt='Natacha' src='line.png' />}
                    label='Line Rich Menu'
                    onDelete={handleOpen}
                    color='primary'
                  />
                </Box3>
              </Typographys>
            </Box2>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <br />
        <br />
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
