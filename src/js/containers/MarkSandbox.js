import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MarkActions from '../actions/mark'
import * as ConnectionActions from '../actions/connection'
import MarkSandbox from '../components/MarkSandbox'
import { setConnectionCoordinates } from '../selectors'

const mapStateToProps = state => ({
    marks: state.marks,
    connections: setConnectionCoordinates(state.connections, state.marks)
})

const mapDispatchToProps = (dispatch) => ({
    markActions: bindActionCreators(MarkActions, dispatch),
    connectionActions: bindActionCreators(ConnectionActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkSandbox)
