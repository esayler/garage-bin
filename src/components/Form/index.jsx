import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from './Select'

export default class Form extends Component {

  state = {
    name: '',
    reason: '',
    cleanliness: 'Sparkling',
  }

  updateCleanliness = ({target}) => {
    this.setState({cleanliness: target.value})
  }

  updateName = ({target}) => {
    this.setState({name: target.value})
  }

  updateReason = ({target}) => {
    this.setState({reason: target.value})
  }

  appendItem = () => {
    if (this.state.name !== '') {
      this.props.appendItem(this.state)
    }

    console.log(this.state)
  }

  render() {
    return (
      <div className='form'>
        <input name='item-name' type='text' placeholder='Item Name' value={this.state.name} onChange={this.updateName} />
        <input name='item-reason' type='text' placeholder='Item Reason' value={this.state.reason} onChange={this.updateReason} />
        <Select
          name='cleanliness'
          className='select cleanliness'
          options={['Sparkling', 'Dusty', 'Rancid']}
          value={this.state.cleanliness}
          updateSelection={this.updateCleanliness}
        />
        <button onClick={this.appendItem}>Submit</button>
      </div>
    )
  }
}

