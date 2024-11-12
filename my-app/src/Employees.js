import { useState} from 'react';
import Employee from './Employee';
const Employees = () => {
        const [employees, setEmployees] = useState([
      { empId: 1234, name: 'John', designation: 'SE' },
      { empId: 4567, name: 'Tom', designation: 'SSE' },
      { empId: 8910, name: 'Kevin', designation: 'TA' }
        ])
        const addEmployee = () => {
            setEmployees([...employees, { empId: 6789, name: "Clara", designation: "TL" }]);
            };
        return (
            <Employee employees={employees} listName='MDM project' addEmployee={addEmployee} />
        )
}
export default Employees;