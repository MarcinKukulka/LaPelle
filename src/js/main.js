let navbar, burgerBtn, accordion, accordionBtns, accordionArrow, allActiveItems, menuItems, footerYear;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    currentYear();
};

const prepareDOMElements = () => {
    burgerBtn = document.querySelector('.navbar__burger-btn');
    navbar = document.querySelector('.navbar__links');
    accordionBtns = document.querySelectorAll('.accordion-btn');
    allActiveItems = document.querySelectorAll('.accordion-info')
    accordionArrow = document.querySelectorAll('.accordion-arrow')
    menuItems = document.querySelectorAll('.navbar__link');
    footerYear = document.querySelector('.year')

};


const prepareDOMEvents = () => {
    burgerBtn.addEventListener('click', showMenu);
    menuItems.forEach(item => item.addEventListener('click', closeMenu));
    accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems));
    window.addEventListener('click', clickOutsideAccordion)
};


function openAccordionItems() {
    if (this.nextElementSibling.classList.contains('active')) {
        this.nextElementSibling.classList.remove('active');
        this.firstElementChild.classList.remove('arrow-rotate')
    } else {
        closeAccordionItems();
        this.nextElementSibling.classList.toggle('active');
        this.firstElementChild.classList.toggle('arrow-rotate');
    }

};

const closeAccordionItems = () => {
    allActiveItems.forEach(item => item.classList.remove('active'));
    accordionArrow.forEach(arrow => arrow.classList.remove('arrow-rotate'))
}

const clickOutsideAccordion = e => {
    if (
        e.target.classList.contains('accordion-btn') ||
        e.target.classList.contains('accordion-info') ||
        e.target.classList.contains('accordion-info-text')
    )
        return

    closeAccordionItems()
}

const showMenu = () => {
    burgerBtn.classList.toggle('is-active');
    navbar.classList.toggle('navbar__links--active');
    document.body.classList.toggle('fixed-body');
};

const closeMenu = () => {
    burgerBtn.classList.remove('is-active');
    navbar.classList.remove('navbar__links--active');
    document.body.classList.remove('fixed-body')
}

const currentYear = ()=> {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

window.addEventListener('DOMContentLoaded', main);
