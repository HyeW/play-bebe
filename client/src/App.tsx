import React from 'react';
import MenuBar from "./components/MenuBar/MenuBar";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuBar/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
          <Route path="*" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;