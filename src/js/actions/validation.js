import {
    MARK_WIDTH,
    MARK_HEIGHT
} from '../constants/presetValues'


export const validateCoordinates = (box, clientCoord, id) => {
    return [...checkBorders(box, clientCoord), ...checkContact(clientCoord, id)];
}

export const validateConnection = (newBond, allConnections) => {
    const errors = [];
    const hasSameBond = allConnections.some((bond) => {
        return bond.dots.sort().join(',') === newBond.sort().join(',')
    })

    hasSameBond && errors.push("Connection alredy exist")

    return errors
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
            elems: document.elementsFromPoint(x - MARK_WIDTH/2, y + MARK_HEIGHT/2)
        },
        {
            name: `top right corner`,
            elems: document.elementsFromPoint(x + MARK_WIDTH/2, y + MARK_HEIGHT/2)
        },
        {
            name: `bottom left corner`,
            elems: document.elementsFromPoint(x - MARK_WIDTH/2, y - MARK_HEIGHT/2)
        },
        {
            name: `bottom right corner`,
            elems: document.elementsFromPoint(x + MARK_WIDTH/2, y - MARK_HEIGHT/2)
        }
    ];
    const contacts = [];

    corners.map(corner => {
        for (let i = 0; i < corner.elems.length; i++) {
            if (corner.elems[i].localName === 'div' &&
                corner.elems[i].className.includes(markClassName) &&
                +corner.elems[i].dataset.id !== id) {
                contacts.push(`Contact with other mark in ${corner.name}`);
            }
        }
    })

    return contacts
}
