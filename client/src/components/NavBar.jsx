import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons/';
import { useSelector, useDispatch } from 'react-redux';
import { extendDrawer, shrinkDrawer } from '../actions/window';

function NavBar() {
  const useStyles = makeStyles((theme) => ({
    arrowIconDrawerClosed: {
      marginLeft: 40,
      [theme.breakpoints.down('xs')]: {
        marginLeft: -10,
      },
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    arrowIconDrawerOpened: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: 180,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  }));

  const classes = useStyles();
  const drawerExtended = useSelector((store) => store.window.drawerExtended);
  const dispatch = useDispatch();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={drawerExtended ? classes.arrowIconDrawerOpened : classes.arrowIconDrawerClosed}
          onClick={drawerExtended ? () => dispatch(shrinkDrawer()) : () => dispatch(extendDrawer())}
        >
          {drawerExtended ? <ArrowBack /> : <ArrowForward />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
