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
        bond: PropTypes.object.isRequired
    }

    clicked (e) {
        console.log("HEY");
    }

    render() {
        const { bond } = this.props

        return (
            <div className="bondWrap">
                <svg width={SANDBOX_WIDTH} height={SANDBOX_HEIGHT}>
                    <line x1="20" y1="20" x2="200" y2="100" stroke={BOND_COLOR} strokeWidth={BOND_WIDTH}/>
                </svg>
            </div>
        )
    }
}

export default ConnectionItem
