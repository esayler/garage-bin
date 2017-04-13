import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import Form from '../components/Form'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    draft: state.draft,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
