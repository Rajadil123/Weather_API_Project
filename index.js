
function getWeather(city){
    console.log(city);
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=51da6d1d93795ef2003bc921af39a718", function(data){
    console.log(data);
    document.getElementById("report").style.display="block";
    var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather=data.weather[0].main;
    var temp=data.main.temp;
    $(".city").append(city);
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
    });
}
