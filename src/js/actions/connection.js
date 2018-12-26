import * as types from '../constants/actionTypes'
import {
    validateConnection
} from './validation'


export const addConnection = (ids, connections) => {
    const errors = validateConnection(ids, connections)

    if (errors.length) {
        console.log("errors", errors);
        return ({ type: types.ADD_CONNECTION_REJECT, errors })
    }

    return ({ type: types.ADD_CONNECTION, connectMark:ids })
}

export const deleteConnection = (id) => {
    return ({ type: types.DELETE_CONNECTION, deleteId: id })
}