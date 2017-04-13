import fetch from 'isomorphic-fetch'

export const appendItem = (item) => (dispatch, getState) => {
  fetch(`/api/v1/items/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: item.name,
        reason: item.reason,
        cleanliness: item.cleanliness,
      }),
    })
    .then(res => {
      console.log(res)
      dispatch({
        type: 'APPEND_ITEM',
        item,
      })
    })
}

export const getItems = () => (dispatch, getState) => {
  fetch(`/api/v1/items/`)
    .then(res => res.json())
    .then(payload => {
      payload.map(item => {
        dispatch({
          type: 'APPEND_ITEM',
          item,
        })
      })
    })
}

export const clearItems = () => {
  return {
    type: 'CLEAR_ITEMS',
  }
}
