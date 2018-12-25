import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MarkActions from '../actions'
import MarkSandbox from '../components/MarkSandbox'

const mapStateToProps = state => ({
    marks: state.marks
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(MarkActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkSandbox)
