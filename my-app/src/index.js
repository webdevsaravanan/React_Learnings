import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FunctionalRender from './FunctionalRender';
import reportWebVitals from './reportWebVitals';
import JsxConcept from './JsxConcept';
import JavascriptExpression from './JavascriptExpression';
import MapFunction from './MapFunction';
import CssJsx from './CssJsx';
import Materialui from './MaterialUI';
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Show from "./Show";
import State from './State';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <li className="nav-item">
              <Link className="navbar-brand" to="/Show">
                React Bootstrap Demo
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path="/Show" element={<Show />}></Route>
        </Routes>
      </BrowserRouter>
  </>
)
const functionalRender = ReactDOM.createRoot(document.getElementById('FunctionalRender'))
functionalRender.render(<FunctionalRender />)

const jsxConcept = ReactDOM.createRoot(document.getElementById('jsxConcept'))
jsxConcept.render(<JsxConcept />)

const javascriptExpression = ReactDOM.createRoot(
  document.getElementById('javascriptExpression')
)
javascriptExpression.render(<JavascriptExpression />)

const mapFunction = ReactDOM.createRoot(document.getElementById('mapFunction'))
mapFunction.render(<MapFunction />)

const cssJsx = ReactDOM.createRoot(document.getElementById('cssJsx'))
cssJsx.render(<CssJsx />)

const materialUI = ReactDOM.createRoot(document.getElementById('Materialui'))
materialUI.render(<Materialui />)

const state = ReactDOM.createRoot(document.getElementById('State'))
state.render(<State />)

reportWebVitals()
