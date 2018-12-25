import React from 'react'
import PropTypes from 'prop-types'

import MarkItem from './MarkItem'

import {
    SANDBOX_HIGHT,
    SANDBOX_WIDTH
} from '../constants/presetSizes'

const MarkSandbox = ({ marks, actions }) => (
    <div
        className="sandbox"
        onDoubleClick={(e) => actions.addMark(e)}
        style={{ width: SANDBOX_WIDTH, height: SANDBOX_HIGHT }}>
        {marks.map(mark =>
            <MarkItem key={mark.id} mark={mark} {...actions} />
        )}
    </div>
)

MarkSandbox.propTypes = {
    marks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}

export default MarkSandbox
