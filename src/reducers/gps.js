const gps = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GPS':
          return action.value
        default:
          return state
    }
  }
  
  export default gps