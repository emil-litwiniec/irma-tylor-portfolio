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
            overPicture.style.left = 0;

        }
    })
};

const slideOut = (e) => {
    const id = e.target.dataset.id;

    overPictures.forEach(overPicture => {
        if (overPicture.dataset.id === id) {
            overPicture.style.left = "-40rem";

        }
    })
};

menuLinks.forEach(menuLink => menuLink.addEventListener('mouseenter', slideIn));
menuLinks.forEach(menuLink => menuLink.addEventListener('mouseleave', slideOut));

previews.forEach(preview => preview.addEventListener('mouseenter', slideIn))
previews.forEach(preview => preview.addEventListener('mouseleave', slideOut))