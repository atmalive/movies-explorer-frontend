export const filterMoviesInput = (data, input) => {
    if (input.length === 0) {
        return [];
    }

    return data.filter((item) => {
        return item.nameRU.indexOf(input) > -1 || item.nameEN.indexOf(input) > -1 || item.description.indexOf(input) > -1;
    });
};
