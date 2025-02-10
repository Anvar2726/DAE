const advertising = document.querySelector(".advertising-box");
const headerNav = document.querySelector(".header-nav-item");
const hamburgerMenu = document.querySelector(".hamburger-menu");

console.log(headerNav);


const openNav = () => {
  headerNav.classList.toggle("header-nav-item-show");
}

const scroll = () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 5) {
    advertising.classList.add("hide-advertising-box");
  } else advertising.classList.remove("hide-advertising-box");
};

window.addEventListener("scroll", scroll);
hamburgerMenu.addEventListener('click', openNav);
window.addEventListener('click', function(e) {
  if (!e.target.matches('.hamburger-menu,.hamburger-menu *')) {
    headerNav.classList.remove("header-nav-item-show");
  }
  
})
