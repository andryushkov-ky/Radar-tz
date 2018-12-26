import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    MARK_HEIGHT,
    MARK_WIDTH
} from '../constants/presetValues'

class MarkItem extends Component {
    static propTypes = {
        mark: PropTypes.object.isRequired,
        editMark: PropTypes.func.isRequired
    }

    state = {
        moving: false
    }

    dragStart = e => {
        this.setState({ moving: true })

        e.dataTransfer.setData('text/html', document.querySelector(".sandbox"));
    }

    dragEnd = e => {
        this.setState({ moving: false })

        this.props.editMark(e, this.props.mark.id)
    }

    render() {
        const { mark } = this.props
        const classHelper = this.state.moving ? `moving` : '';

        return (
            <div
                className={`mark el ${classHelper}`}
                draggable='true'
                onDragStart={(e) => this.dragStart(e)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => e.stopPropagation()}
                onDragEnd={(e) => this.dragEnd(e)}
                style={{
                    top: mark.y,
                    left: mark.x,
                    height: MARK_HEIGHT,
                    width: MARK_WIDTH,
                    margin: `${-MARK_HEIGHT/2}px 0 0 ${-MARK_WIDTH/2}px`,
                    background: mark.color
                }}
                data-id={mark.id}
                key={mark.id}>
            </div>
        )
    }
}

export default MarkItem
