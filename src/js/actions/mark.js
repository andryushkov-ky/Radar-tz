import * as types from '../constants/actionTypes'
import {
    validateCoordinates
} from './validation'

export const addMark = e => {
    const sandbox = document.querySelector(".sandbox").getBoundingClientRect()
    const dot = { x: e.clientX, y: e.clientY }
    const errors = validateCoordinates(sandbox, dot)

    if (errors.length) {
        console.log("errors", errors);

        return ({ type: types.ADD_MARK_REJECT, errors })
    }

    const coordinates = calculateCoordinates(sandbox, dot);

    return ({ type: types.ADD_MARK, coordinates })
}

export const editMark = (e, id) => {
    const sandbox = document.querySelector(".sandbox").getBoundingClientRect()
    const dot = { x: e.clientX, y: e.clientY }
    const errors = validateCoordinates(sandbox, dot, id)

    if (errors.length) {
        console.log("errors", errors);

        return ({ type: types.EDIT_MARK_REJECT, errors })
    }

    const coordinates = calculateCoordinates(sandbox, dot);

    return ({ type: types.EDIT_MARK, coordinates, id })
}


const calculateCoordinates = (box, { x, y }) => {
    const innerX =  x - box.x;
    const innerY =  y - box.y;

    return { innerX, innerY }
}