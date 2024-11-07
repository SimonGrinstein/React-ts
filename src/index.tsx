import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Homework04 from './homeworks/homework04/Homework04';
// import Homework05 from './homeworks/homework05/Homework05';
import Lesson06 from './lessons/lesson06/Lesson';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <App /> */}
    {/* <Homework04 /> */}
    {/* <Homework05 /> */}
    <Lesson06 />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
