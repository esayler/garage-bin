export const appendItem = (item) => (dispatch, getState) => {

  dispatch({
    type: 'APPEND_ITEM',
    item,
  })
}
