const list = (state = [], action) => {
  switch (action.type) {
    case 'APPEND_ITEM':
      return [...state, action.item]
    default:
      return state
  }
}

export default list
