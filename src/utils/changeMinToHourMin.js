export const changeMinToHourMin = (duration) => {
    let min = duration % 60;
    let hour = Math.floor(duration / 60);
    return { hour: hour, minutes: min };
};
