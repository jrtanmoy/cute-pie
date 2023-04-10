// side nav start 
function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll(".sidebar-list li a").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("side-active");
        link.setAttribute("aria-current", "page");
    }
  });