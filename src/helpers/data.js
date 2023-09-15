export const getEventDetail = (data, id) => {
    return data.find((event) => event.id === id);
};
