// My Scripts SAD

$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
        console.log(weather);
        $(".city").text(weather.city);
        $(".temp").text(weather.temp + "°");
        $(".cond-code").text(weather.code);
        $(".icon img").attr("src", weather.image);
    },
    error: function(error) {
      console.log("yo something went wrong");
    }
  });
});


$("#gear").click(function(){
    $("#overlay").slideDown();
    $("#overlay").removeClass("hidden");
        $("#con1").addClass("hidden");

});



 /*$(document.body).css('background-image', 'url("./../img/clouds.jpg")');*/
