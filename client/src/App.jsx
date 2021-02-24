import React from 'react';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';

function App() {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <SideDrawer />
    </div>
  );
}

export default App;
