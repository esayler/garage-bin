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

  render() {
    const { list } = this.props
    const listItems = list.length !== 0 ? list.map(item => {
      return (
        <Item {...item} />
      )
    }) : null

    return (
      <div className='list'>
        <FormContainer />
        <div className='list-items'>
          {listItems}
        </div>
      </div>
    )
  }
}

export default ListContainer(List)
