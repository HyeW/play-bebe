import React from 'react';
import MenuBar from "./components/MenuBar/MenuBar";
import {ThemeProvider, Typography} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuBar/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
          <Route path="*" element={<Typography variant="h1">임시 페이지</Typography>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;