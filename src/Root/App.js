import React from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Theme/globalStyles';

const theme = {
  primary: 'black'
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <div>Hello</div>
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
