import * as types from '../constants/actionTypes'
import {
    MARK_WIDTH,
    MARK_HIGHT
} from '../constants/presetSizes'

// probably should be in selectors dir

const calculateCoordinates = (sandbox, { x, y }) => {
    const innerX =  x - sandbox.x;
    const innerY =  y - sandbox.y;

    return { innerX, innerY }
}

const validateCoordinates = (box, clientCoord) => {
    return checkBorders(box, clientCoord) || checkContact(clientCoord);
}

// Let's check out that mark lay inside sandbox
const checkBorders = (sandbox, { x, y }) => {
    const errText = 'Too close to the';

    if (sandbox.left > x - MARK_WIDTH/2) {
        return `${errText} left`
    } else if (sandbox.right < x + MARK_WIDTH/2) {
        return `${errText} right`
    } else if (sandbox.top > y - MARK_HIGHT/2) {
        return `${errText} top`
    } else if (sandbox.bottom < y + MARK_HIGHT/2) {
        return `${errText} bottom`
    }

    return null
}

// Let's check out that new mark doesn't contact with other marks
const checkContact = ({ x, y }) => {
    const markClassName = 'mark';

    if (document.elementFromPoint(x - MARK_WIDTH/2, y + MARK_HIGHT/2).className === markClassName) {
        return `contact in top left corner`
    } else if (document.elementFromPoint(x + MARK_WIDTH/2, y + MARK_HIGHT/2).className === markClassName) {
        return `contact in top right corner`
        } else if (document.elementFromPoint(x - MARK_WIDTH/2, y - MARK_HIGHT/2).className === markClassName) {
        return `contact in bottom left corner`
    } else if (document.elementFromPoint(x + MARK_WIDTH/2, y - MARK_HIGHT/2).className === markClassName) {
        return `contact in bottom right corner`
    }

    return null
}

export const addMark = e => {
    const sandbox = document.querySelector(".sandbox").getBoundingClientRect()
    const dot = { x: e.clientX, y: e.clientY }
    const error = validateCoordinates(sandbox, dot)

    if (error) {
        return ({ type: types.ADD_MARK_REJECT, error })
    }

    const coordinates = calculateCoordinates(sandbox, dot);

    return ({ type: types.ADD_MARK, coordinates })
}

export const editMark = val => {
    console.log("GET", val);

    return ({ type: types.EDIT_MARK })
}