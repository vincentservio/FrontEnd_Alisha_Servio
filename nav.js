function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "450px";
  document.getElementById("header").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "auto";
  document.getElementById("main").style.marginRight = "auto";
  document.getElementById("header").style.marginLeft = "auto";
  document.getElementById("header").style.marginRight = "auto";
}
