import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Theme/globalStyles';
import { theme } from '../Theme/mainTheme';
import Navigation from '../components/templates/Navigation';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Navigation />
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
