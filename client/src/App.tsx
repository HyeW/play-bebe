import React from 'react';
import MenuBar from "./components/MenuBar/MenuBar";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar/>
    </ThemeProvider>
  );
}

export default App;