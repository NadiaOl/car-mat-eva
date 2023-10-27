const mobileMenu = document.querySelector(".modalMenuOpen") 
const mobileMenuWrap = document.querySelector(".mobileMenuWrap")
const navMobList = document.querySelector(".navMobList")

mobileMenu.addEventListener("click", hendledMobMenuToggle)
navMobList.addEventListener("click", hendledMobMenuToggle)

function hendledMobMenuToggle (event) {
    mobileMenuWrap.classList.toggle('hide')
}
