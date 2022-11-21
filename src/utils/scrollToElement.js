export const scrollToElement = (elem) => {
    const element = document.querySelector(elem);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(elem);
};
