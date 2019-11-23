
// HOVER OVER PROJECTS EFFECT //

const previews = document.querySelectorAll('.preview');
const menuLinks = document.querySelectorAll('.nav-button');
const overlays = document.querySelectorAll('.over-picture');


const slideIn = (e) => {
    const id = e.target.dataset.id;

    overlays.forEach(overlay => {
        if (overlay.dataset.id === id) {
            overlay.style.opacity = 1;

        }
    })
};

const slideOut = (e) => {
    const id = e.target.dataset.id;

    overlays.forEach(overlay => {
        if (overlay.dataset.id === id) {
            overlay.style.opacity = 0;

        }
    })
};

menuLinks.forEach(menuLink => menuLink.addEventListener('mouseenter', slideIn));
menuLinks.forEach(menuLink => menuLink.addEventListener('mouseleave', slideOut));

previews.forEach(preview => preview.addEventListener('mouseenter', slideIn));
previews.forEach(preview => preview.addEventListener('mouseleave', slideOut));


// TOGGLE SIDE MENU BTN

const showMenuBtn = document.querySelector('.side-menu-btn');
const header = document.querySelector('.header');

const changeWithBtn = (btn, target) => {


    const toggleBtn = (btn, target) => {
        const selectBtn = document.querySelector(`.${btn}`).classList;
        
        const selectTarget = document.querySelector(`.${target}`).classList;
        let isActive = selectBtn[1] ? true : false;
    
        if(isActive) {
            selectBtn.remove(`${btn}--active`);
            selectTarget.remove(`${target}--active`);
        } else if (!isActive) {
            selectBtn.add(`${btn}--active`);
            selectTarget.add(`${target}--active`);
        }
        isActive = !isActive;
    }
    document.querySelector(`.${btn}`).addEventListener('click', () => toggleBtn(btn, target))
}


// TOGGLE DESCRIPTIONS --ABOUT PAGE

const revealBtn1 = document.querySelector('.exhibitions__reveal-btn');

const frame1 = document.querySelector('.exhibitions__frame');

const isAboutPage = window.location.pathname === "/about.html"

changeWithBtn('side-menu-btn', 'header');

if (isAboutPage) {
    changeWithBtn('exhibitions__reveal-btn', 'exhibitions');
    changeWithBtn('education__reveal-btn', 'education');
    changeWithBtn('contact__reveal-btn', 'contact');
} 
