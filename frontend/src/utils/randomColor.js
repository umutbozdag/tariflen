const getRandomColor = () => {
    const o = Math.round,
        r = Math.random,
        s = 255;
    return (
        "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        ".35" +
        ")"
    );
}

export default getRandomColor;