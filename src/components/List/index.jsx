import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListContainer from '../../containers/listContainer'
import FormContainer from '../../containers/FormContainer'

class List extends Component {
  render() {
    return (
      <div className='list'>
        <FormContainer />
      </div>
    )
  }
}

export default ListContainer(List)
