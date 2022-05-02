document.addEventListener('DOMContentLoaded', () => {

    // menu
    const burgerButton = document.querySelector("#burgerButton");
    const burgerMenu = document.querySelector("#burgerMenu");
    const burgerMenuItems = burgerMenu.querySelectorAll(".burgerMenu__item");
    const menuItems = document.querySelectorAll(".menu-main .li_menu");

    burgerButton.onclick = () => {
        burgerButton.classList.toggle("active");
        burgerMenu.classList.toggle("active");

        for (let i = 1; i <= menuItems.length; i++) {
            setTimeout(() => menuItems[i - 1].classList.toggle("hidden"), 50 * i);
        }

        for (let i = 1; i <= burgerMenuItems.length; i++) {
            setTimeout(() => burgerMenuItems[i - 1].classList.toggle("visible"), 50 * i);
        }

    }

    document.querySelector(".main_container").addEventListener('click', () => {

        if (burgerMenu.classList.contains("active")) {
            burgerButton.classList.remove("active");
            burgerMenu.classList.remove("active");

            for (let i = 1; i <= menuItems.length; i++) {
                setTimeout(() => menuItems[i - 1].classList.remove("hidden"), 50 * i);
            }

            for (let i = 1; i <= burgerMenuItems.length; i++) {
                setTimeout(() => burgerMenuItems[i - 1].classList.remove("visible"), 50 * i);
            }
        }
    });
});