// My Scripts SAD

$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
        $(".city").text(weather.city);
        $(".temp").text(weather.temp + "°");
        $(".cond-code").text(weather.code);
        $(".icon img").attr("src", weather.image);
        
        
        //change the bg based on the condition code
        
        
        if (weather.code < 3){
            $(document.body).css('background-image', 'url("./img/w1.jpg")');
        }
        else if(weather.code < 5){
            $(document.body).css('background-image', 'url("./img/w4.jpg")');
        }
        else if (weather.code < 13){
            $(document.body).css('background-image', 'url("./img/w6.jpg")');
        }
        else if (weather.code < 19){
            $(document.body).css('background-image', 'url("./img/w2.jpg")');
        }
        else if (weather.code < 31){
            $(document.body).css('background-image', 'url("./img/w5.jpg")');
        }
        else if (weather.code < 37){
            $(document.body).css('background-image', 'url("./img/w3.jpg")');
        }
        else if (weather.code < 37){
            $(document.body).css('background-image', 'url("./img/w3.jpg")');
        }
        else if (weather.code < 40){
            $(document.body).css('background-image', 'url("./img/w1.jpg")');
        }
        else if (weather.code < 44){
            $(document.body).css('background-image', 'url("./img/w2.jpg")');
        }
        else if (weather.code < 46){
            $(document.body).css('background-image', 'url("./img/w5.jpg")');
        }
        else if (weather.code < 47){
            $(document.body).css('background-image', 'url("./img/w2.jpg")');
        }
        else if (weather.code < 48){
            $(document.body).css('background-image', 'url("./img/w1.jpg")');
        }
        
        
        
    },
    error: function(error) {
      console.log("yo something went wrong");
    }
  });
});


/*
$("#gear").click(function(){
    $("#overlay").slideDown();
    $("#overlay").removeClass("hidden");
        $("#con1").addClass("hidden");

});
*/
 /*$(document.body).css('background-image', 'url("./../img/clouds.jpg")');*/


$("#config").click(function(){
    $('.ui.sidebar').sidebar('toggle');
});
            

            

