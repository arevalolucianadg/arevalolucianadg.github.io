document.addEventListener("DOMContentLoaded", function() {

    var iconWrapper = document.getElementById("icon-wrapper"),
        icon = document.getElementById("icon"),
        menu = document.getElementById("menu"),
        itemsMenu = document.querySelectorAll("ul#menu li");

    iconWrapper.onclick = function () {
      icon.classList.toggle("animate");
      menu.classList.toggle("open");
    }
    
    for(i=0; i < itemsMenu.length; i++){
      itemsMenu[i].onclick = function () {
        menu.classList.remove("open");
        icon.classList.remove("animate");
      }
    }
});