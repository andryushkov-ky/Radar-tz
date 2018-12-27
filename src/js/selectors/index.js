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

export const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}