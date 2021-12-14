function getDate() {
    const date = new Date();
    const dateString = date.toLocaleDateString().split("/");
    const hourString = date.toLocaleTimeString().split(":");
    const dates = (dateString[2].length === 1 ? "0" + dateString[2] : dateString[2])
        + "-" + (dateString[1].length === 1 ? "0" + dateString[1] : dateString[1])
            + "-" + (dateString[0].length === 1 ? "0" + dateString[0] : dateString[0]);
    const hours = (hourString[0].length === 1 ? "0" + hourString[0] : hourString[0])
        + ":" + (hourString[1].length === 1 ? "0" + hourString[1] : hourString[1]);
    return [dates, hours];
}

export { getDate };