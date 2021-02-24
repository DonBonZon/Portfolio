import React, { useState } from 'react';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Hidden,
} from '@material-ui/core';
import { Star } from '@material-ui/icons/';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { extendDrawer, shrinkDrawer } from '../actions/window';

function SideDrawer() {
  const width = 60;
  const expandedWidth = 200;

  // drawerExpanded handles mouse hover
  const [drawerExpaneded, setDrawerExpaneded] = useState(false);
  // drawerExtended handles button press
  const drawerExtended = useSelector((store) => store.window.drawerExtended);

  const useStyles = makeStyles((theme) => ({
    drawerOpen: {
      width: expandedWidth,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      width,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  }));

  const classes = useStyles();
  const dispatch = useDispatch();
  const expandDrawer = () => setDrawerExpaneded(true);
  const shortenDrawer = () => setDrawerExpaneded(false);

  const drawerItems = (
    <List>
      <Divider />
      <ListItem
        button
        onClick={() => {
          console.log('ello');
        }}
      >
        <ListItemIcon>
          <Star />
        </ListItemIcon>
        <ListItemText primary="test" />
      </ListItem>
      <Divider />
    </List>
  );

  return (
    <>
      <Hidden xsDown>
        <Drawer
          onMouseEnter={expandDrawer}
          onMouseLeave={shortenDrawer}
          variant="permanent"
          classes={{
            paper: drawerExpaneded || drawerExtended ? classes.drawerOpen : classes.drawerClose,
          }}
        >
          {drawerItems}
        </Drawer>
      </Hidden>

      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerExtended}
          classes={{
            paper: classes.drawerOpen,
          }}
          onBackdropClick={() => dispatch(shrinkDrawer())}
        >
          {drawerItems}
        </Drawer>
      </Hidden>
    </>
  );
}

export default SideDrawer;
