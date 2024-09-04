import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FunctionalRender from './FunctionalRender'
import reportWebVitals from './reportWebVitals'
import JsxConcept from './JsxConcept'
import JavascriptExpression from './JavascriptExpression'
import MapFunction from './MapFunction'
import CssJsx from './CssJsx'
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
root.render(<FunctionalRender />)

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

reportWebVitals()
