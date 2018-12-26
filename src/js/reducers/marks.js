import {
    ADD_MARK,
    EDIT_MARK
} from '../constants/actionTypes'

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

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default (state = initialState, { type, coordinates, id }) => {
    switch (type) {
        case ADD_MARK:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    x: coordinates.innerX,
                    y: coordinates.innerY,
                    color: getRandomColor()
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
