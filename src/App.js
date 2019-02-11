import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
//import NavBar from './components/NavBar';
import Butt from './components/Buttons';
import MediaCard from './components/Card';
import MenuAppBar from './components/MenuAppBar'
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import FloatingActionButtonZoom from './components/FloatingActionButtonZoom';
import TemporaryDrawer from './components/Drawer';
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
})

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider theme={theme}>
         <MenuAppBar/>
         <FloatingActionButtonZoom/>
          <br/>
          <TextField
          placeholder="Place your e-mail here"
          label="Receive updates" />
          <TemporaryDrawer/>
          <br/>
          
          <MediaCard/>
          <Butt/>
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
