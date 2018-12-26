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
        connection: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        this.toggleDialog = this.toggleDialog.bind(this);
        this.renderDeleteDialog = this.renderDeleteDialog.bind(this);
        this.handlerDeleteBtn = this.handlerDeleteBtn.bind(this);
    }

    state = {
        dialog: false
    }

    toggleDialog() {
        const opposite = !this.state.dialog

        this.setState({ dialog: opposite })
    }

    handlerDeleteBtn() {
        this.toggleDialog()

        this.props.deleteConnection(this.props.connection.id)
    }

    renderDeleteDialog() {
        const dots = this.props.connection.coordinates

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
                        onClick={this.toggleDialog}>
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
        const { connection } = this.props
        const dots = connection.coordinates

        return (
            <div>
                <svg width={SANDBOX_WIDTH} height={SANDBOX_HEIGHT}>
                    <line
                        onClick={this.toggleDialog}
                        x1={dots.x1}
                        y1={dots.y1}
                        x2={dots.x2}
                        y2={dots.y2}
                        stroke={this.state.dialog ? 'red' : BOND_COLOR}
                        strokeWidth={BOND_WIDTH}/>
                </svg>

                {this.state.dialog && this.renderDeleteDialog()}
            </div>
        )
    }
}

export default ConnectionItem
