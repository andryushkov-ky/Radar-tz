import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    MARK_HIGHT,
    MARK_WIDTH
} from '../constants/presetSizes'

class MarkItem extends Component {
    static propTypes = {
        mark: PropTypes.object.isRequired,
        editMark: PropTypes.func.isRequired
    }

    dragStart = (e) => {
        console.log("dragStart")
        e.currentTarget.classList.add('moving');

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', document.querySelector(".sandbox"));
    }

    dragEnter = (e) => {
        e.currentTarget.classList.add('over');


    }

    dragLeave = (e) => {
        e.currentTarget.classList.remove('over');
    }

    dragEnd = (e) => {
        console.log("dragEnd", e);
        console.log("dragEnd", this.props.mark);
        console.log("END", e.pageX, e.pageY);

        this.props.editMark({
            id: this.props.mark.id,
            x: e.pageX,
            y: e.pageY,
        })
    }

    render() {
        const { mark } = this.props

        return (
            <div
                className="mark"
                draggable='true'
                onDragStart={(e) => this.dragStart(e)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => this.dragEnter(e)}
                onDragLeave={(e) => this.dragLeave(e)}
                onDrop={(e) => e.stopPropagation()}
                onDragEnd={(e) => this.dragEnd(e)}
                style={{
                    top: mark.y,
                    left: mark.x,
                    height: MARK_HIGHT,
                    width: MARK_WIDTH,
                    background: mark.color
                }}
                key={mark.id}>
            </div>
        )
    }
}

export default MarkItem
