const pedometer = (state = {}, action) => {
  switch (action.type) {
      case 'SET_STEPS':
        return {...state , Steps:action.value}
      case 'SET_LASTDAY_STEPS':
        return {...state , LastDaySteps:action.value }
      default:
        return state
  }
}

export default pedometer