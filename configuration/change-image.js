const image_button = document.getElementById("image-button");
const menu_container = document.getElementById("menu-container");
image_button.addEventListener("change", changeImage);

function changeImage(){
    const image = image_button.files[0];
    const bgUrl = URL.createObjectURL(image);
    document.body.style.backgroundImage = `url(${bgUrl})`;
    menu_container.style.display = 'none';
}
