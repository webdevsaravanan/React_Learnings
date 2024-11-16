import {useState, useEffect} from 'react';
function Sample() {
  const [name,setName] = useState("Jack")
  const [age,setAge] = useState(20)
  useEffect(()=>{
   console.log("use Effect called")
  })
  return (
  <div>
        <h1>Your Name is: {name}</h1><br/>
        <h1>Your Age is: {age} </h1><br/>
        <button className="btn btn-primary" onClick={()=>setName("Tom")}>Update Name</button>&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={()=>setAge(age+1)}>Increment Age</button>
        </div>
 );
}
export default Sample;
