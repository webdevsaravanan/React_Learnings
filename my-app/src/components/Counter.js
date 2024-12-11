import {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "../Actions/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
const Counter = () => {
	const [step,setStep]=useState(0);
  const counter = useSelector(state=>state.count)
  const dispatch = useDispatch()
  return(
    <>
      <h1>{counter}</h1>
      <p style={{float:"left"}}>Step Size: <input type="number" placeholder="Enter the step size" onChange={(event)=>{setStep(event.target.value)}}/></p>
      <br/>
      <p><button className="btn btn-primary" onClick={()=>dispatch(increment(step))}>Increment</button>&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={()=>dispatch(decrement(step))}>Decrement</button>
      </p>
    </>
  )
}
export default Counter;
