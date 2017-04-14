import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListContainer from '../../containers/listContainer'
import FormContainer from '../../containers/FormContainer'
import Item from '../Item'

class List extends Component {
  constructor() {
    super()
    this.state = {
      sort: null,
    }
  }

  componentDidMount() {
    this.setState({sort: this.props.sort})
  }

  closeGarage = () => {
    this.props.closeGarage()
  }

  setActiveItem = (id) => {
    this.props.setActiveItem(id)
  }

  sortItems = () => {
    if (this.state.sort === null || this.state.sort === 'asc') {
      this.setState({sort: 'desc'})
      this.props.setSortDirection('desc')
    } else {
      this.setState({sort: 'asc'})
      this.props.setSortDirection('asc')
    }
  }

  compareDesc = (a, b) => (a.name.localeCompare(b.name))

  compareAsc = (a, b) => (a.name.localeCompare(b.name) * -1)

  render() {
    let { list } = this.props
    const sortedList = this.state.sort === 'desc' ? list.sort(this.compareDesc) : list.sort(this.compareAsc)

    const listItems = sortedList.length !== 0 ? sortedList.map(item => {
      return (
        <div key={item.id} className='list-item'>
          <a onClick={() => this.setActiveItem(item.id)}>{item.name}</a>
        </div>
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
          <hr />
          <div className='stat'><h4 className='label'>Total:</h4> <span>{list ? list.length : 0} </span></div>
          <div className='stat'><h4 className='label'>Sparkling</h4>: <span>{numSparkling} </span></div>
          <div className='stat'><h4 className='label'>Dusty</h4>: <span>{numDusty} </span></div>
          <div className='stat'><h4 className='label'>Rancid</h4>: <span>{numRancid} </span></div>
          <button className='btn btn-sort' onClick={this.sortItems}>Sort</button>
          <hr />
        </div>
        <div className='list-items'>
          {listItems}
        </div>
      </div>
    )
  }
}

export default ListContainer(List)
