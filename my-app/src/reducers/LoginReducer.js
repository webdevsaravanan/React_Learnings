const LoginReducer = (state={},action) => {
      switch(action.type) {
        case "LOGIN":
            return {
             ...state,
             isAuthed: action.isAuthenticated
            }
        default:
          return state
      }
    }
    export default LoginReducer;
    