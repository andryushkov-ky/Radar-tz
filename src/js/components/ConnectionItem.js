import React from 'react'
import PropTypes from 'prop-types'

import {
    SANDBOX_WIDTH,
    SANDBOX_HEIGHT,
    BOND_WIDTH,
    BOND_COLOR
} from '../constants/presetValues'

const ConnectionItem = ({ connection, handlerSvgClick }) => (
    <div>
        <div className='connectionItem'>
            <svg
                onClick={e => handlerSvgClick(e)}
                width={SANDBOX_WIDTH}
                height={SANDBOX_HEIGHT}>
                <line
                    data-id={connection.id}
                    x1={connection.coordinates.x1}
                    y1={connection.coordinates.y1}
                    x2={connection.coordinates.x2}
                    y2={connection.coordinates.y2}
                    stroke={BOND_COLOR}
                    strokeWidth={BOND_WIDTH}/>
            </svg>
        </div>
    </div>
)

ConnectionItem.propTypes = {
    connection: PropTypes.object.isRequired,
    handlerSvgClick: PropTypes.func.isRequired
}

export default ConnectionItem
