import {
    ADD_CONNECTION,
    DELETE_CONNECTION
} from '../constants/actionTypes'

const initialState = [
    {
        id: 0,
        dots: [0, 1],
    }
]


export default (state = initialState, { type, deleteId, connectMark }) => {
    switch (type) {
        case ADD_CONNECTION:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    dots: connectMark
                }
            ]
        case DELETE_CONNECTION:
            return state.filter(bond =>
                bond.id !== deleteId
            )
        default:
            return state
    }
}
