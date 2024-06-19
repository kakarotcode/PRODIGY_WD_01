$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".container").css("background" , "blue");
        }
  
        else{
            $(".container").css("background" , "#333");  	
        }
    })
  })