import {useState} from 'react';
import {useSelector,useDispatch } from "react-redux";
import {loginValidate} from "../Actions/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch()
let navigate = useNavigate();
  const authenticated = useSelector(state=>state.LoginReducer.isAuthed)
  const [name,setName] = useState("")
  const [pwd, setPwd] = useState("") 
  const [message,setMessage] = useState("")
  const handleLogin = (e) => {
    let data;
    e.preventDefault();
    if((name==="") || (pwd===""))
    {
      setMessage("Enter Username and Password")
    }
    else
    {
      setMessage("")
      data = {name:name,password:pwd}
      dispatch(loginValidate(data))
      if(authenticated===true){
        navigate('/redux2');
      }
    }
  }
    return (<>
          <form onSubmit={handleLogin}>
            <h1>{authenticated}</h1>
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
            /><br/>
            </div>
            <div className="text-danger">{message}</div>
            {authenticated===false ? <div className="text-danger">Invalid Credentials</div>:null}<br/>
            <button type="submit" className="btn btn-primary">Login</button>  
          </form>
          {authenticated===true ? <Navigate to="/redux2"/> : null}
        </>);
}
export default Login;
