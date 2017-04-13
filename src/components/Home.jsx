import React from 'react'

export default class Home extends React.Component {

  openGarage = () => {
    this.props.openGarage()
  }

  render() {
    return (
      <div className='content'>
        <nav>
          <button className='btn btn-open' onClick={this.openGarage}>Open Garage</button>
        </nav>
      </div>
    )
  }
}
