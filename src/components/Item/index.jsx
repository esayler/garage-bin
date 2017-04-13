import React, { Component } from 'react'
import listContainer from '../../containers/listContainer'

class Item extends Component {

  render() {
    const { activeItem } = this.props
    return (
      <div className='list-item'>
        <p>{this.props.list[activeItem]['id']}</p>
        <h2>{this.props.list[activeItem]['name']}</h2>
        <p>{this.props.list[activeItem]['reason']}</p>
        <p>{this.props.list[activeItem]['cleanliness']}</p>
      </div>
    )
  }
}

export default listContainer(Item)
