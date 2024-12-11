const CounterReducer=(state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":    
            return{...state,count:state.count+parseInt(action.step)}
        case "DECREMENT":
             return{...state,count:state.count-parseInt(action.step)}
        default:
             return state
    }
}
export default CounterReducer;
