// LAZY LOADING //

const images = window.document.querySelectorAll('source, img');

const config = {
    rootMargin: '50px 0px',
    threshold: 0.01
};
let onIntersection = (entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            preloadImage(entry.target);
        }
    });
}

let observer;

let preloadImage = (element) => {
    if (element.dataset && element.dataset.src) {
        element.src = element.dataset.src;
    }
    if (element.dataset && element.dataset.srcset) {
        element.srcset = element.dataset.srcset
    }
}

if (!('IntersectionObserver' in window)) {
    Array.from(images).forEach(image => preloadImage(image));
} else {
    observer = new IntersectionObserver(onIntersection, config);
    images.forEach(image => {
        observer.observe(image);
    });

}

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


// SCROLL TO TOP //

const mainContentWrapper = new SimpleBar(document.querySelector('.main-content-wrapper'));

const showScroll = (e) => {
    console.log(e);
}

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
        scrollToTopBtn.style.visibility = "visible";
    } else {
        scrollToTopBtn.style.opacity = 0;
        scrollToTopBtn.style.visibility = "hidden";
    }
}

scrollToTopBtn.addEventListener('click', scrollToTop);
simplebarContentWrapper.addEventListener('scroll', showElement);


// TOGGLE SIDE MENU BTN

const showMenuBtn = document.querySelector('.side-menu-btn');
const header = document.querySelector('.header');

const toggleMenuBtn = (e) => {
    let isActive = showMenuBtn.classList[1] ? true : false;
    console.log(isActive);

    if(isActive) {
        showMenuBtn.classList.remove("side-menu-btn--active");
        header.classList.remove("side-menu--active");
    } else if (!isActive) {
        showMenuBtn.classList.add("side-menu-btn--active");
        header.classList.add("side-menu--active");
    }
    isActive = !isActive;
}

showMenuBtn.addEventListener('click', toggleMenuBtn)






