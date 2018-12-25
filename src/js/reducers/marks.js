import {
    ADD_MARK
} from '../constants/actionTypes'

const initialState = [
    {
        id: 0,
        x: 20,
        y: 20,
        color: '#5791ff'
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

export default (state = initialState, {type, coordinates}) => {
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

        default:
            return state
    }
}
