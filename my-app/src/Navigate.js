import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
const Navigate = () => {
  let navigate = useNavigate();
  const [name,setName] = useState("")
  const [pwd, setPwd] = useState("") 
  const [message,setMessage] = useState("")
  const handleLogin = (e) => {
    e.preventDefault();
    if((name==="") || (pwd===""))
    {
      setMessage("Enter Username and Password")
    }
    else
    {
     navigate('/landing/'+name);
    }
  }
    return (<>
          <form onSubmit={handleLogin}>
            <br/><h2>Login</h2><br/>
            <div className="form-group">
              <label>Username:</label>
              <input type = "text"
              style={{width:'40%'}} className="form-control" onChange={(event)=>setName(event.target.value)}
              placeholder = "UserName"
            /><br/><br/>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type = "password"
              style={{width:'40%'}}
              onChange={(event)=>setPwd(event.target.value)}
              className="form-control"
              placeholder = "Password"
            /><br/><br/>
            </div>
            <div className="text-danger">{message}</div>
            <button type="submit" className="btn btn-primary">Login</button>  
          </form>
        </>);
}
export default Navigate;
