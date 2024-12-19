const CounterReducer2 = (state={countt:1},action) => {
      switch(action.type) {
        case "INCREMENT2":
          return {...state,countt:state.countt+1}
        case "DECREMENT2":
          return {...state,countt:state.countt-1}
        default:
          return state;
      }
    }
    export default CounterReducer2;
    