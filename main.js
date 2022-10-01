


const menuEmail= document.querySelector(".navbar-email");

console.log(menuEmail);
const destopMenu= document.querySelector(".desktop-menu");

menuEmail.addEventListener('click', togleShowDestopMenu);

function togleShowDestopMenu() {

    destopMenu.classList.toggle('inactive');
}