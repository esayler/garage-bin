import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

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
    .then(res => res.json())
    .then(payload => {
      dispatch({
        type: 'APPEND_ITEM',
        item: payload,
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


export const openGarage = () => (dispatch, getState) => {
  dispatch(push('/list'))
  return {
    type: 'UNLOCK',
  }
}

export const closeGarage = () => (dispatch, getState) => {
  dispatch(push('/'))
  return {
    type: 'LOCK',
  }
}

export const setActiveItem = (id) => (dispatch, getState) => {
  dispatch({
    type: 'SET_ACTIVE_ITEM',
    id,
  })
  dispatch(push(`/items/${id}`))
}
