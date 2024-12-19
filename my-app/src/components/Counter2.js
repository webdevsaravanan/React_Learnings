import { useSelector,useDispatch } from "react-redux";
import { increment2, decrement2 } from "../Actions/actions";
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const counter = useSelector(state=>state.CounterReducer2.countt)
  const dispatch = useDispatch()

  return(
    <>
      <h1>{counter>0 ? counter : 0}</h1>
      <button className="btn btn-primary" onClick={()=>dispatch(increment2())}>Increment</button>&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={()=>dispatch(decrement2())}>Decrement</button>
    </>
  )
}
export default Counter;
