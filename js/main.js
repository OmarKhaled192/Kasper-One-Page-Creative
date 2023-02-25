// add nav btn action
let toggleMenu = document.querySelector("header nav .toggle-menu");
let toggleMenuNav = document.querySelector("header nav .toggle-menu + ul ");
let counter = 0;
toggleMenu.addEventListener("click", () => {
  if (counter % 2 == 0) toggleMenuNav.className = "toggle-menu-display";
  else toggleMenuNav.className = "toggle-menu-hidden";
  counter++;
});

// add active class for clicked btn
let links = document.querySelectorAll("header nav ul li a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.className = "";
    });
    link.className = "active";
  });
});
