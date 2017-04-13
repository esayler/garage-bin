import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
