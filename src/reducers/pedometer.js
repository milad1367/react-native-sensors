const pedometer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_PEDOMETER':
        return action.value
      default:
        return state
  }
}

export default pedometer