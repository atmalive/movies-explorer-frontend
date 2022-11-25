export const scrollToElement = (elem) => {
    console.log(elem);
    const element = document.querySelector(elem);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
