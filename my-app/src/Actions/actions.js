export function increment(step){
    return {
      type:"INCREMENT",
      step
    }
  }
  export function decrement(step){
    return {
      type:"DECREMENT",
      step
    }
  }
  export function CallIncrement(step){
    //asynchronous operations can be written here.
    console.log("CallIncrement");
    return (dispatch)=>{
      setTimeout(()=>{
          dispatch(increment(step));
      },3000)
    }
  }
  