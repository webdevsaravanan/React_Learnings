import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
function CssJsx() {
  return (
    <>
      <h1>CSS in React Js:</h1>
      <button className="button">Submit</button>
      <h1>Bootstarp in React Js:</h1>
      <button className="btn btn-success">Submit</button>
      <h1>React-Bootstarp in React Js:</h1>
      <Button variant="warning"> Click here </Button>
    </>
  )
}
export default CssJsx
