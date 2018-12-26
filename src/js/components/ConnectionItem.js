import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    SANDBOX_WIDTH,
    SANDBOX_HEIGHT,
    BOND_WIDTH,
    BOND_COLOR
} from '../constants/presetValues'

class ConnectionItem extends Component {
    static propTypes = {
        connection: PropTypes.object.isRequired,
        handlerSvgClick: PropTypes.func.isRequired
    }

    render() {
        const { connection, handlerSvgClick } = this.props
        const dots = connection.coordinates

        return (
            <div className='connectionItem'>
                <svg
                    onClick={e => handlerSvgClick(e)}
                    width={SANDBOX_WIDTH}
                    height={SANDBOX_HEIGHT}>
                    <line
                        data-id={connection.id}
                        onClick={this.toggleDialog}
                        x1={dots.x1}
                        y1={dots.y1}
                        x2={dots.x2}
                        y2={dots.y2}
                        stroke={BOND_COLOR}
                        strokeWidth={BOND_WIDTH}/>
                </svg>
            </div>
        )
    }
}

export default ConnectionItem
