import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./store";
import {composeWithDevTools} from 'redux-devtools-extension'; // 리덕스 개발자 도구
import axios from "axios";

const store = createStore(rootReducer, composeWithDevTools())

// 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 해야 하는지 여부를 나타낸다. (기본값: false)
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
