import React, { Component } from 'react'
import listContainer from '../../containers/listContainer'

class Item extends Component {

  render() {
    const { activeItem } = this.props
    const item = this.props.list.find(item => {
      return item.id === activeItem
    })
    return (
      <div className='list-item'>
        <p>{item.id}</p>
        <h2>{item.name}</h2>
        <p>{item.reason}</p>
        <p>{item.cleanliness}</p>
      </div>
    )
  }
}

export default listContainer(Item)
