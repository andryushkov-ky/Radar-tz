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

    constructor(props) {
        super(props);

        this.pickedMarkId = null;
        this.pickedMarkTarget = null;
    }

    state = {
        pickedConnectionId: null,
        pickedConnectionTarget: null
    }

    pickMark = ({currentTarget}, id) => {
        const prevTarget = this.pickedMarkTarget;
        const prevId = +this.pickedMarkId;

        if (prevTarget && prevId !== id) {
            prevTarget.classList.remove('pickedMark');
            this.props.connectionActions.addConnection([prevId, id], this.props.connections)

            this.pickedMarkId = null;
            this.pickedMarkTarget = null;
        } else {
            currentTarget.classList.add('pickedMark')

            this.pickedMarkId = id;
            this.pickedMarkTarget = currentTarget;
        }
    }

    handlerSvgClick = (e) => {
        const elems = document.elementsFromPoint(e.clientX, e.clientY);

        for (let i = 0; i < elems.length; i++) {
            if (elems[i].localName === 'line') {

                this.state.pickedConnectionTarget &&
                this.state.pickedConnectionTarget.classList.remove("pickedBond")

                elems[i].classList.add("pickedBond")

                this.setState({
                    pickedConnectionTarget: elems[i],
                    pickedConnectionId: elems[i].dataset.id
                })
            }

        }
    }

    handlerCloseDialog = () => {
        this.state.pickedConnectionTarget.classList.remove("pickedBond")

        this.setState({ pickedConnectionId: null, pickedConnectionTarget: null })
    }

    handlerDeleteBtn = () => {
        this.handlerCloseDialog()

        this.props.connectionActions.deleteConnection(this.state.pickedConnectionId)
    }

    renderDeleteDialog = () => {
        const pickedBond = this.props.connections.find(item => item.id === +this.state.pickedConnectionId);
        const dots = pickedBond.coordinates;

        return (
            <div
                className='deleteDialog'
                style={
                    {
                        top: (dots.y2 + dots.y1)/2,
                        left: (dots.x2 + dots.x1)/2
                    }
                }>
                <div className="dialogText">
                    Do you want to remove connection?
                </div>
                <div className="btnsWrap">
                    <button
                        className='btn'
                        onClick={this.handlerCloseDialog}>
                        No
                    </button>
                    <button
                        className='btn'
                        onClick={this.handlerDeleteBtn}>
                        Yes
                    </button>
                </div>
            </div>
        )
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
                        key={ mark.id }
                        mark={ mark }
                        pickMark={ this.pickMark }
                        {...markActions}/>
                )}
                {connections.map(connection =>
                    <ConnectionItem
                        key={ connection.id }
                        connection={ connection }
                        handlerSvgClick={ this.handlerSvgClick }
                        {...connectionActions} />
                )}

                {this.state.pickedConnectionId && this.renderDeleteDialog()}
            </div>
        )
    }
}

export default MarkSandbox
