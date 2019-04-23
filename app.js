const menuLink1 = document.getElementById('menuLink1');
const previews = document.querySelectorAll('.preview');
const menuLinks = document.querySelectorAll('.nav-button');
const overPictures = document.querySelectorAll('.over-picture');

// const slideIn = () => {
//     overPicture.style.left = 0;
// }
// const slideOut = () => {
//     overPicture.style.left = "-40rem"
// }

// menuLink1.addEventListener('mouseenter', slideIn);
// menuLink1.addEventListener('mouseleave', slideOut);


// menuLinks.forEach((menuLink) => console.log(menuLink));

const slideIn = (e) => {
    const id = e.target.dataset.id;

    overPictures.forEach(overPicture => {
        if (overPicture.dataset.id === id) {
            overPicture.style.opacity = 1;

        }
    })
};

const slideOut = (e) => {
    const id = e.target.dataset.id;

    overPictures.forEach(overPicture => {
        if (overPicture.dataset.id === id) {
            overPicture.style.opacity = 0;

        }
    })
};

menuLinks.forEach(menuLink => menuLink.addEventListener('mouseenter', slideIn));
menuLinks.forEach(menuLink => menuLink.addEventListener('mouseleave', slideOut));

previews.forEach(preview => preview.addEventListener('mouseenter', slideIn));
previews.forEach(preview => preview.addEventListener('mouseleave', slideOut));




const simplebarContentWrapper = document.querySelector('.simplebar-content-wrapper');


const scrollToTopBtn = document.querySelector('.scroll-to-top');


const scrollToTop = () => {
    simplebarContentWrapper.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
const showElement = (e) => {
    let scrollTop = e.target.scrollTop;

    if (scrollTop > 0) {
        scrollToTopBtn.style.opacity = 0.2;
    } else {
        scrollToTopBtn.style.opacity = 0;
    }
}

scrollToTopBtn.addEventListener('click', scrollToTop);
simplebarContentWrapper.addEventListener('scroll', showElement)