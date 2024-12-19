import axios from 'axios';
const increment = (step) => {
    return {
        type: "INCREMENT",
        step
    }
}
const decrement = (step) => {
    return {
        type: "DECREMENT",
        step
    }
}
const increment2 = () => {
  return {
      type: "INCREMENT2"
  }
}
const decrement2 = () => {
  return {
      type: "DECREMENT2"
  }
}
const login = (isAuthenticated) => {
    return {
        type: "LOGIN",
        isAuthenticated
    }
}
const loginValidate = (data) => {
    return dispatch => {
        axios.get('http://localhost:4000/users')
          .then((res) => {
            console.log(data);
            let value = res.data
            console.log(value);
            var result = value.find(({ username,password }) => username === data.name && password === data.password) 
            console.log(result) ;
            if(result) {
                dispatch(login(true))
              }
              else {
                dispatch(login(false))
              }
            })
      }
}
const CallIncrement=(step)=>{
  //asynchronous operations can be written here.
  console.log("CallIncrement");
  return (dispatch)=>{
    setTimeout(()=>{
        dispatch(increment(step));
    },3000)
  }
}
export {increment,decrement,login,loginValidate,CallIncrement,increment2,decrement2}