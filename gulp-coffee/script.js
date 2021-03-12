const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
console.log("Hello")
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
