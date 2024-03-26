// menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
   tombolMenu.clik(function(){
       menu.toggle();
    });
    menu.clik(function(){
       menu.toggle();
    });
}
$(document).ready(function(){
    var width = $(window).width();
    if(width < 990){
        klikMenu();
    }
    })
