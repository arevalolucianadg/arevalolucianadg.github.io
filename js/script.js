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

    var minithumb = document.getElementsByClassName("minithumb");
    var slide = document.getElementById("slide-proyectos");

    for(i=0; i < minithumb.length; i++){
      minithumb[i].onclick = function () {
        var value = this.dataset.value;
        slide.classList.remove(slide.classList);
        slide.classList.add(value);
      }
    }

});