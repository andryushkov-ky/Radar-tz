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
            dots: PropTypes.arrayOf(PropTypes.number),
            coordinates:PropTypes.shape({
                x1: PropTypes.number.isRequired,
                x2: PropTypes.number.isRequired,
                y1: PropTypes.number.isRequired,
                y2: PropTypes.number.isRequired
            }).isRequired,
        }).isRequired).isRequired,
        markActions: PropTypes.object.isRequired,
        connectionActions: PropTypes.object.isRequired
    }

    pickMark(id) {
        console.log("hey", id);
    }

    render() {
        const { marks, connections, markActions, connectionActions } = this.props

        return (
            <div
                className="sandbox"
                onDoubleClick={(e) => markActions.addMark(e)}
                style={{
                    width: SANDBOX_WIDTH,
                    height: SANDBOX_HEIGHT
                }}>
                {marks.map(mark =>
                    <MarkItem
                        key={mark.id}
                        mark={mark}
                        onClick={() => this.pickMark(mark.id)}
                        {...markActions}/>
                )}
                {connections.map(connection =>
                    <ConnectionItem key={connection.id} connection={connection} {...connectionActions} />
                )}
            </div>
        )
    }
}

export default MarkSandbox
