

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

// var queryCity = "api.openweathermap.org/data/2.5/weather?q={city name}";
// var queryCity = "api.openweathermap.org/data/2.5/weather?q=" + var for user + "?api-Key=" + apikey;
// var queryForecast = "pro.openweathermap.org/data/2.5/forecast/hourly?q={city name},{country code}";
// var queryUV = "http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";


// var apiKey = "b6907d289e10d714a6e88b30761fae22";

// var cityName = "Austin";

// $(document).ready(function (){

//     function getWeather (cityName){
//         var apiKey = "aed52c01e7f5375831def9553ce0837d";
    
//         // var cityName = "api.openweathermap.org/data/2.5/weather?q={city name}";
        
//         var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
//         // console.log(queryCity);
//         $.ajax({
//             url: queryCity,
//             method: "GET"
//         }). then (function(results){
           
//             console.log(results)
//             var getTemp = results.main.temp;
//             var getHumidity = results.main.humidity;
//             var getWindspeed = results.wind.speed;
//             // var currentDate = moment(results.dt, "X").format("MM/DD/YYYY");
//             // var row = $("<div class='row>");
//             // var col = $("<div class='col-sm-12'>");
//             // var img = $("<img>");
//             // img.attr("src", "http://openweathermap.org/img/w" + results.weather[0].icon + ".png");

        
//             $(".temperature").append(getTemp);
//             $(".humidity").append(getHumidity);
//             $(".windspeed").append(getWindspeed);
    
//             var lon = results.coord.lon;
//             var lat = results.coord.lat;
//             var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
//             $.ajax({
//                 url: queryUV,
//                 method: "GET"
//             }).then (function (uvResults){
//                 console.log(uvResults)
//                 var getUV = uvResults.value
//                 $(".cardTemp").append(getUV)
    
//             }).catch (err => console.log(err))
//         });
//         // var getTemp = results.main.temp;
//         // var getHumidity = results.main.humidity;
//         // var getWindspeed = results.wind.speed;
//         // var getUV = uvResults;
    
//         // $(cardTemp).append(getTemp);
//         // $(cardTemp).append(getHumidity);
//         // $(cardTemp).append(getWindspeed);
//         // $(cardTemp).append(getUV)
//     }
    
//     $(".citySearch").on('click', function(){
//         var whichCity = $(".enterCity").val();
//         localStorage.setItem("specificCity", whichCity);
//         getWeather(whichCity);
    
//     });
    
    // var queryCity = "https://openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    
    // $.ajax({
    //     url: queryCity,
    //     method: "GET"
    // }). then (function(results){
    //     var lon = results.coord.lon;
    //     var lat = results.coord.lat;
    //     var queryUV = "https://samples.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
    //     $.ajax({
    //         url: queryUV,
    //         method: "GET"
    //     }).then (function (uvResults){
    //         console.log(uvResults)
    //     })
    //     console.log(results)
    // })

});

// function getWeather (cityName){
//     var apiKey = "aed52c01e7f5375831def9553ce0837d";

//     // var cityName = "api.openweathermap.org/data/2.5/weather?q={city name}";
    
//     var queryCity = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
//     // console.log(queryCity);
//     $.ajax({
//         url: queryCity,
//         method: "GET"
//     }). then (function(results){
       
//         console.log(results)
//         var getTemp = results.main.temp;
//         var getHumidity = results.main.humidity;
//         var getWindspeed = results.wind.speed;
    
//         $(".cardTemp").append(getTemp);
//         $(".cardTemp").append(getHumidity);
//         $(".cardTemp").append(getWindspeed);

//         var lon = results.coord.lon;
//         var lat = results.coord.lat;
//         var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
//         $.ajax({
//             url: queryUV,
//             method: "GET"
//         }).then (function (uvResults){
//             console.log(uvResults)
//             var getUV = uvResults.value
//             $(".cardTemp").append(getUV)

//         }).catch (err => console.log(err))
//     });
//     // var getTemp = results.main.temp;
//     // var getHumidity = results.main.humidity;
//     // var getWindspeed = results.wind.speed;
//     // var getUV = uvResults;

//     // $(cardTemp).append(getTemp);
//     // $(cardTemp).append(getHumidity);
//     // $(cardTemp).append(getWindspeed);
//     // $(cardTemp).append(getUV)
// }

// $(".citySearch").on('click', function(){
//     var whichCity = $(".enterCity").val();
//     localStorage.setItem("specificCity", whichCity);
//     getWeather(whichCity);

// });

// // var queryCity = "https://openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

// // $.ajax({
// //     url: queryCity,
// //     method: "GET"
// // }). then (function(results){
// //     var lon = results.coord.lon;
// //     var lat = results.coord.lat;
// //     var queryUV = "https://samples.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon;
// //     $.ajax({
// //         url: queryUV,
// //         method: "GET"
// //     }).then (function (uvResults){
// //         console.log(uvResults)
// //     })
// //     console.log(results)
// // })