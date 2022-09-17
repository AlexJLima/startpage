let button = document.getElementById("config-button");
const menu = document.getElementById("menu-container");

button.addEventListener("click", showMenu);
menu.style.display = "none";

function showMenu(){
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}