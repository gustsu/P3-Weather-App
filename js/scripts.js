// My Scripts SAD

$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
        console.log(weather);
        $(".city").text("Location: " + weather.city);
        $(".temp").text(weather.temp + "°");
        $(".cond-code").text(weather.code);
        $(".icon img").attr("src", weather.image);
    },
    error: function(error) {
      console.log("yo something went wrong");
    }
  });
});


