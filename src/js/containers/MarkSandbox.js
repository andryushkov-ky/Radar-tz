import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MarkActions from '../actions'
import MarkSandbox from '../components/MarkSandbox'

const mapStateToProps = state => ({
    marks: state.marks,
    connections: state.connections
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MarkActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkSandbox)
