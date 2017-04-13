import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListContainer from '../../containers/listContainer'
import FormContainer from '../../containers/FormContainer'
import Item from '../Item'

class List extends Component {

  componentDidMount() {
    this.props.clearItems()
    this.props.getItems()
  }

  closeGarage = () => {
    this.props.closeGarage()
  }

  setActiveItem = (id) => {
    console.log(id)
    this.props.setActiveItem(id)
  }

  render() {
    const { list } = this.props
    const listItems = list.length !== 0 ? list.map(item => {
      return (
        <div key={item.id} className='list-item'>
          <a onClick={() => this.setActiveItem(item.id)}>{item.name}</a>

        </div>
        // <Item {...item} />
      )
    }) : null

    const numSparkling = list.reduce((acc, curr, index) => {
      if (curr.cleanliness === 'Sparkling') {
        return acc + 1
      } else {
        return acc
      }
    }, 0)

    const numDusty = list.reduce((acc, curr, index) => {
      if (curr.cleanliness === 'Dusty') {
        return acc + 1
      } else {
        return acc
      }
    }, 0)
   
    const numRancid = list.reduce((acc, curr, index) => {
      if (curr.cleanliness === 'Rancid') {
        return acc + 1
      } else {
        return acc
      }
    }, 0)

    return (
      <div className='list'>
        <button className='btn btn-close' onClick={this.closeGarage}>Close Garage</button>
        <FormContainer />
        <div className='stats'>
          <span>Total: {list ? list.length : 0} </span>
          <span>Sparkling: {numSparkling} </span>
          <span>Dusty: {numDusty} </span>
          <span>Rancid: {numRancid} </span>
        </div>
        <div className='list-items'>
          {listItems}
        </div>
      </div>
    )
  }
}

export default ListContainer(List)
