import React, { Component } from 'react'
import listContainer from '../../containers/listContainer'
import Select from '../Form/Select'
import update from 'immutability-helper'

class Item extends Component {

  constructor() {
    super()
    this.state = {
      cleanliness: '',
    }
  }

  componentDidMount() {
    const { activeItem } = this.props
    const itemObj = this.props.list.find(item => {
      return item.id === activeItem
    })

    this.setState({ activeItem: itemObj })
  }

  updateCleanliness = ({target}) => {
    this.setState(update(this.state, { activeItem: { cleanliness: { $set: target.value } } }), () => this.props.updateActiveItemCleanliness(this.state.activeItem))
  }

  render() {
    const item = this.state.activeItem || {}
    return (
      <div className='list-item'>
        <p>{item.id}</p>
        <h2>{item.name}</h2>
        <p>{item.reason}</p>
        <p>{item.cleanliness}</p>
        <Select
          name='cleanliness'
          className='select cleanliness'
          options={['Sparkling', 'Dusty', 'Rancid']}
          value={this.state.activeItem ? this.state.activeItem.cleanliness : ''}
          updateSelection={this.updateCleanliness}
        />
      </div>
    )
  }
}

export default listContainer(Item)
