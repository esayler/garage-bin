const list = (state = [], action) => {
  switch (action.type) {
    case 'APPEND_ITEM':
      return [...state, action.item]
    case 'CLEAR_ITEMS':
      return []
    case 'UPDATE_ITEM':
      return state.map(item => {
        if (item.id === action.item.id) {
          return action.item
        } else {
          return item
        }
      })
    default:
      return state
  }
}

export default list
