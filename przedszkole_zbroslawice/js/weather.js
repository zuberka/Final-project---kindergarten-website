$(function() {

    var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Zbroslawice&units=metric&appid=06a1515d84f0f09589929af1e98b2ed5';

    load();

    function load() {
        $.ajax({
            url: weatherUrl,
            type: "GET",
            datatype: "json"

        }).done(function(resp) {
            console.log(resp);
            insertWeather(resp);
        }).fail(function(err) {
            console.log(err);
        })
    }

    function insertWeather(data) {

        //console.log(data);

        var weather = data.list[0];

        $("#temp").text(Math.floor(weather.main.temp));
        $("#pre").text(Math.floor(weather.main.pressure));
        $("#hum").text(Math.floor(weather.main.humidity));
        setWeatherIcon(weather.weather[0].description);
    }


    function setWeatherIcon(weath){

        var weatherIconCode = '';
        var description = '';
        switch(weath) {
            case "clear sky":
                weatherIconCode = "wi wi-day-sunny";
                description = 'Pogodny dzień';
                break;

            case "broken clouds":
            case "few clouds":
            case "scattered clouds":
                weatherIconCode = "wi wi-day-cloudy";
                description = 'Niewielkie zachmurzenie';
                break;

            case "light rain":
                weatherIconCode = "wi wi-showers";
                description = 'Przelotne opady';
                break;

            case "overcast clouds":
                weatherIconCode = "wi wi-cloudy";
                description = 'Zachmurzenie duże';
                break;

            case "mist":
            case "fog":
                weatherIconCode = "wi wi-day-fog";
                description = 'Mgła';
                break;

            case "snow":
                weatherIconCode = "wi wi-snow";
                description = 'Śnieg';
                break;

            default:
                weatherIconCode = "wi wi-cloud";
        }

        $("i").addClass(weatherIconCode);
        $("#descr").text(description);
    }
});



