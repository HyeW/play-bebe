import React from 'react';
import MenuBar from "./components/MenuBar/MenuBar";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";
import SeeReview from "./components/Review/SeeReview/SeeReview";
import WriteReview from "./components/Review/WriteReview/WriteReview";
import SeeReviewOnePlace from "./components/Review/SeeReview/SeeReviewOnePlace";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuBar/>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/where-to-go" element={<Main/>}></Route>
          <Route path="/users-review" element={<SeeReview/>}></Route>
          <Route path="/users-review-per-place" element={<SeeReviewOnePlace/>}></Route>
          <Route path="/write-review" element={<WriteReview/>}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
          <Route path="*" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;