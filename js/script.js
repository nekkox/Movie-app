const global = {
  currentPage: window.location.pathname, //current route
};

function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    if (global.currentPage == link.getAttribute("href")) {
      link.classList.add("active");
    }
  });
}

//Intit App
function Init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;
    case "/search.html":
      console.log("Search");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case global.currentPage.includes("/tv-details.html"):
      console.log("Show Details");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    default:
      console.log("Default");
      break;
  }

  highlightActiveLink();

}

document.addEventListener("DOMContentLoaded", Init);
