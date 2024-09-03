import React from 'react'
function MapFunction() {
    var employees = [
      { empId: 1234, name: "John", designation: "SE" , exp: 2.5},
      { empId: 4567, name: "Tom", designation: "SSE" , exp: 5.5},
      { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
    ];
    return (
      <>
      <h1>{"Map() function in JSX:"}</h1>
        <table>
          <thead>
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.exp>=2.5 ? <h4 style={{color:'green'}}>Eligible</h4>:<h4 style={{color:'red'}}>Not Eligible</h4>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  export default MapFunction;