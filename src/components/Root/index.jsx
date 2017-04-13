import React from 'react'
import { Provider } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import About from '../About'
import NotFound from '../NotFound'
import HomeContainer from '../../containers/HomeContainer'
import ListContainer from '../../containers/listContainer'
import List from '../List'
import Item from '../Item'

class Root extends React.Component {
  componentDidMount() {
     this.props.getItems()
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history} >
          <div>
            <Link to='/' className='hello-link'><h1>Garage-Bin</h1></Link>
            <div>
              <Switch>
                <Route exact path='/' component={HomeContainer} />
                <Route path='/list' component={List} />
                <Route path='/items/:id' component={Item} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}


export default ListContainer(Root)
