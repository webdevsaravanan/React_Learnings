import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalRender from './FunctionalRender';
import reportWebVitals from './reportWebVitals';
import JsxConcept from './JsxConcept';
import JavascriptExpression from './JavascriptExpression';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FunctionalRender/>
);

const jsxConcept = ReactDOM.createRoot(document.getElementById('jsxConcept'));
jsxConcept.render(
  <JsxConcept/>
);

const javascriptExpression = ReactDOM.createRoot(document.getElementById('javascriptExpression'));
javascriptExpression.render(
  <JavascriptExpression/>
);

reportWebVitals();
