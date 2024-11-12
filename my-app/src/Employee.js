import 'bootstrap/dist/css/bootstrap.min.css';
const Employee = (props) => {
        return (<>
        <h1>Props in React Js:</h1>
        <h3>List of {props.listName}</h3>
 <table style={{ width: '60%' }} className='table'>
          <thead className="thead-light">
                             <tr>
                            <th>Employee Id</th>
                                        <th>Name</th>
                                        <th>Designation</th>
                                </tr>
                        </thead>
                        <tbody>
                    {props.employees.map(employee => {
               return (<tr key={employee.empId}>
                              <td>{employee.empId}</td>
                              <td>{employee.name}</td>
                              <td>{employee.designation}</td></tr>)
                                })
                                } 
                        </tbody>
                </table><br/><br/>
            <button onClick={props.addEmployee} className="btn btn-primary">Add an Employee</button>
        </>)
}
export default Employee;