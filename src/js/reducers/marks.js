import {
    ADD_MARK,
    EDIT_MARK
} from '../constants/actionTypes'

import { setRandomColor } from '../selectors'

const initialState = [
    {
        id: 0,
        x: 120,
        y: 120,
        color: '#5791ff'
    },

    {
        id: 1,
        x: 380,
        y: 370,
        color: '#1231aa'
    }
]



export default (state = initialState, { type, coordinates, id }) => {
    switch (type) {
        case ADD_MARK:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    x: coordinates.innerX,
                    y: coordinates.innerY,
                    color: setRandomColor()
                }
            ]
        case EDIT_MARK:
            return state.map(mark =>
                mark.id === id ?
                    { ...mark, x: coordinates.innerX, y: coordinates.innerY } :
                    mark
            );

        default:
            return state
    }
}
