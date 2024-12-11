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
  