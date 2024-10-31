//surgimento do menu mobile e animaçao do menu hamburguer
function clickmenu() {
    line1 = document.getElementById("line1");
    line2 = document.getElementById("line2");
    line3 = document.getElementById("line3");
    menu = document.getElementById("menu-mobile");
    if (menu.style.display == "flex") {
      menu.style.display = "none";
      line2.style.opacity = "1";
      line3.style.transform = "rotate(0deg) translate(0px, 0px)";
      line1.style.transform = "rotate(0deg) translate(0px, 0px)";
    } else {
      menu.style.display = "flex";
      line2.style.opacity = "0";
      line1.style.transform = "rotate(-45deg) translate(-4px, 4px)";
      line3.style.transform = "rotate(45deg) translate(-2.5px, -3.5px)";
    }
  }


 