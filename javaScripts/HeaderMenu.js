const toggleBtn = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu-list");
const icon = toggleBtn.querySelector("i");

toggleBtn.onclick = function () {

    menu.classList.toggle("active");


    if (menu.classList.contains("active")) {
        icon.classList = "fa-solid fa-xmark"; 
    } else {
        icon.classList = "fa-solid fa-bars";
    }
}