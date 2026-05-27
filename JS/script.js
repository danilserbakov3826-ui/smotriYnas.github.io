const burger = document.querySelector(".header__menu-burger")
const menuList = document.querySelector(".header__menu-list")

burger.addEventListener('click', function(){
    menuList.classList.toggle("menu-list--active")
})