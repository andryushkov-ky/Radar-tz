import {
    MARK_WIDTH,
    MARK_HEIGHT
} from '../constants/presetValues'


export const validateCoordinates = (box, clientCoord, id) => {
    return [...checkBorders(box, clientCoord), ...checkContact(clientCoord, id)];
}

// Let's check out that mark lay inside sandbox
const checkBorders = (box, { x, y }) => {
    const borders = [
        {
            name: `left border`,
            hasContact: box.left > x - MARK_WIDTH/2
        },
        {
            name: `right border`,
            hasContact: box.right < x + MARK_WIDTH/2
        },
        {
            name: `top border`,
            hasContact: box.top > y - MARK_HEIGHT/2
        },
        {
            name: `bottom border`,
            hasContact: box.bottom < y + MARK_HEIGHT/2
        }
    ]
    const contacts = [];

    borders.map(border => {
        if (border.hasContact) {
            contacts.push(`Too close to the ${border.name}`)
        }
    })

    return contacts
}

// Let's check out that new mark doesn't contact with other marks
const checkContact = ({ x, y }, id) => {
    const markClassName = 'mark';
    const corners = [
        {
            name: `top left corner`,
            elem: document.elementFromPoint(x - MARK_WIDTH/2, y + MARK_HEIGHT/2)
        },
        {
            name: `top right corner`,
            elem: document.elementFromPoint(x + MARK_WIDTH/2, y + MARK_HEIGHT/2)
        },
        {
            name: `bottom left corner`,
            elem: document.elementFromPoint(x - MARK_WIDTH/2, y - MARK_HEIGHT/2)
        },
        {
            name: `bottom right corner`,
            elem: document.elementFromPoint(x + MARK_WIDTH/2, y - MARK_HEIGHT/2)
        }
    ];
    const contacts = [];

    corners.map(corner => {
        debugger
        // if (corner.elem.className.includes(markClassName) && +corner.elem.dataset.id !== id) {
        //     contacts.push(`Contact with other mark in ${corner.name}`);
        // }
    })

    return contacts
}
