const list = (state = [], action) => {
  switch (action.type) {
    case 'APPEND_ITEM':
      return [...state, action.item]
    case 'CLEAR_ITEMS':
      return []
    default:
      return state
  }
}

export default list
