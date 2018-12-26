import * as types from '../constants/actionTypes'

export const addConnection = (ids) => {
    return ({ type: types.ADD_CONNECTION, connectMark:ids })
}

export const deleteConnection = (id) => {
    return ({ type: types.DELETE_CONNECTION, deleteId: id })
}