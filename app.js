const images = window.document.querySelectorAll('source, img');

const config = {
    rootMargin: '50px 0px',
    threshold: 0.01
};
let onIntersection = (entries) => {

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            // Stop watching and load the image
            observer.unobserve(entry.target);
            // call our method: preloadImage
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

// If we don't have support for intersection observer, load the images immediately
if (!('IntersectionObserver' in window)) {
    Array.from(images).forEach(image => preloadImage(image));
} else {
    // It is supported, load the images by calling our method: onIntersection
    observer = new IntersectionObserver(onIntersection, config);
    images.forEach(image => {
        observer.observe(image);
    });

}







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
    } else {
        scrollToTopBtn.style.opacity = 0;
    }
}

scrollToTopBtn.addEventListener('click', scrollToTop);
simplebarContentWrapper.addEventListener('scroll', showElement);




