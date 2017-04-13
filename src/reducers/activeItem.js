const activeItem = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ITEM':
      return action.id
    case 'CLEAR_ACTIVE_ITEM':
      return null
    default:
      return state
  }
}

export default activeItem
