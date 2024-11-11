import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
function State() {
  const [name,setName] = useState("Neymar jR");
  const handleButtonCLick = (e) => {
    if(name==="Neymar jR")
        setName("Cristiano Ronaldo");
    else if(name==="Cristiano Ronaldo")
        setName("Neymar jR");
    console.log(name);
  }
  const [counter, setCounter] = useState(0);

    const [employees, setEmployees] = useState([
     { empId: 1234, name: "John", designation:"SE" },
     { empId: 4567, name: "Tom", designation:"SSE" },
     { empId: 8910, name: "Kevin", designation:"TA" },
    ]);

    const addEmployee = () => {
      setEmployees([
        ...employees,
        { empId: 6789, name: "Clara", designation: "TL" },
      ]);
    }
  
  return (
    <>
    <div>
     <h1>State in React Js:</h1>
      Your Name is: {name}<br/>
      <button onClick={handleButtonCLick}>Update</button>
    </div>
    <div>
       Counter: {counter}<br/>
       <button className="btn btn-primary" onClick={() => setCounter((counter)=>counter+1)}>Increment</button> 
    </div>
    <table style={{ width: "60%" }} className="table">
        <thead className="thead-light">
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addEmployee}>Add an Employee</button>
    </>
  );
}
export default State;