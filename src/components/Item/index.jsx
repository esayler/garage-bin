import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='list-item'>
        <h2>{this.props.name}</h2>
        <p>{this.props.reason}</p>
        <p>{this.props.cleanliness}</p>
      </div>
    )
  }
}

