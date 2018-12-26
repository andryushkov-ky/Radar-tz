import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MarkItem from './MarkItem'
import ConnectionItem from './ConnectionItem'

import {
    SANDBOX_HEIGHT,
    SANDBOX_WIDTH
} from '../constants/presetValues'

class MarkSandbox extends Component {
    static propTypes = {
        marks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        connections: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            dots: PropTypes.array.isRequired
        }).isRequired).isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { marks, connections, actions } = this.props

        return (
            <div
                className="sandbox"
                onDoubleClick={(e) => actions.addMark(e)}
                style={{
                    width: SANDBOX_WIDTH,
                    height: SANDBOX_HEIGHT
                }}>
                {marks.map(mark =>
                    <MarkItem key={mark.id} mark={mark} {...actions} />
                )}
                {connections.map(bond =>
                    <ConnectionItem key={bond.id} bond={bond} {...actions} />
                )}
            </div>
        )
    }
}

export default MarkSandbox
