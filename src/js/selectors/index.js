export const setConnectionCoordinates = (connections, marks) => {
     return connections.map(connection => {
        const mark1 = marks.find(item => item.id === connection.dots[0]);
        const mark2 = marks.find(item => item.id === connection.dots[1]);
        return {
            ...connection,
            coordinates: {
                x1: mark1.x,
                y1: mark1.y,
                x2: mark2.x,
                y2: mark2.y,
            }
        }
    })
}