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

    return (
      <div className='list'>
        <button className='btn btn-close' onClick={this.closeGarage}>Close Garage</button>
        <FormContainer />
        <div className='list-items'>
          {listItems}
        </div>
      </div>
    )
  }
}

export default ListContainer(List)
