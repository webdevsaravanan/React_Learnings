import React from 'react'
function JavascriptExpression() {
    let count = 5;
    let firtSonName = {
        firstName: "Neymar"
      };
      let secondSonName = {
        firstName: "Cristiano",
        lastName: "Ronaldo",
      };
      var x=25, y=30;
    return (
      <>
        <h1>{"JavaScript Expressions in JSX:"}</h1>
        <h3>{"count = "}{count}</h3>
        <h3>{"count*count = "}{count * count}</h3>
        <h1>{"Accessing object in JSX:"}</h1>
        <h3>{"First son name is "}{firtSonName.firstName}</h3>
        <h3>{"Second son name is "}{secondSonName.firstName} {secondSonName.lastName}</h3>
        <h2>{"Evaluating expression:"}</h2>
        <h3> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'}</h3>
      </>
    );
  }
  export default JavascriptExpression;