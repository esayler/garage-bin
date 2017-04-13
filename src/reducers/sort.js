const sort = (state = null, action) => {
  switch (action.type) {
    case 'SET_SORT_ASC':
      return 'asc'
    case 'SET_SORT_DESC':
      return 'desc'
    default:
      return state
  }
}

export default sort
