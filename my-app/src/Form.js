import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
const Form = () => {
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
 return (
  <>
   <div className="container">
    <form>
     <div className="form-group">
      <label htmlFor="name">Username:</label>
      <input
       style={{ width: "40%" }}
       type="text"
       className="form-control"
       id="name"
       placeholder="Enter Name"
       name="name"
       value={username}
      onChange={(event) => setUsername(event.target.value)}
      />
     </div>
     <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input
       style={{ width: "40%" }}
       type="password"
       className="form-control"
       id="pwd"
       placeholder="Enter password"
       name="password"
       value={password}
       onChange={(event) => setPassword(event.target.value)}
      />
     </div>
     <button type="button" className="btn btn-primary">
      Login
     </button>
    </form>
   </div>
   <h4>Welcome {username} !!</h4>
  </>
 );
};
export default Form;
