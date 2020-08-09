import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Theme/globalStyles';
import {theme} from '../Theme/mainTheme';
import Register from '../components/templates/Register';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Register />
            <Register />
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
