// Curtain menu toggle
//
// Transforms hamburger into cross, makes curtain visible, 
// disables scrolling
export const toggleCurtain = () => {

    const topLine = document.querySelector(".hamburger__top-line");
    topLine.classList.toggle("hamburger__top--rotated");

    const bottomLine = document.querySelector(".hamburger__bottom-line");
    bottomLine.classList.toggle("hamburger__bottom--rotated");

    const curtain = document.querySelector(".curtain-wrapper");
    curtain.classList.toggle("curtain-wrapper--is-visible");

    const header = document.querySelector(".header-wrapper");
    header.classList.toggle("header-wrapper--is-filled");

    const body = document.querySelector("body");
    body.classList.toggle("no-scroll");
}

// Closing curtain menu when logo images is clicked
//
// Removes all active classes from curtain and turns cross back
// to hamburger
export const handleLogoClick = () => {
    const topLine = document.querySelector(".hamburger__top-line");
    topLine.classList.remove("hamburger__top--rotated");

    const bottomLine = document.querySelector(".hamburger__bottom-line");
    bottomLine.classList.remove("hamburger__bottom--rotated");

    const curtain = document.querySelector(".curtain-wrapper");
    curtain.classList.remove("curtain-wrapper--is-visible");

    const header = document.querySelector(".header-wrapper");
    header.classList.remove("header-wrapper--is-filled");

    const body = document.querySelector("body");
    body.classList.remove("no-scroll");
}

// Opens contact form overlay on button click. Also applied to 
// overlay close button
export const toggleFormOverlay = () => {
    const formOverlay = document.querySelector(".form-overlay-wrapper");
    formOverlay.classList.toggle("form-overlay-wrapper--is-active");

    const body = document.querySelector("body");
    body.classList.toggle("no-scroll");
}