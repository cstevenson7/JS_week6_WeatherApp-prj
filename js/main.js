function getJson(){
    //get the city form form user input
    let city = document.querySelector("#city").value;
    //link to the api with the city in the url
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=API_KEY_HERE`)
    //callback function with promise
    .then(response => response.json())
    .then(rawData => {
        //to confirm we are pulling data form the API
        console.log(rawData)
        //pulling the daily high from the json file
        let high = rawData.main.temp_max
        //next 2 lines adding the daily high to the html to be
        //displayed in the element with the #high-temp id
        let high_text = document.querySelector('#high-temp')
        let high_f =  `${high} F`
        high_text.innerHTML= high_f

        let low = rawData.main.temp_min 
        let low_text = document.querySelector('#low-temp')
        let low_f =  `${low} F`
        low_text.innerHTML= low_f

        let forecast = rawData.weather[0].main
        let forecast_text = document.querySelector('#forecast')        
        forecast_text.innerHTML= forecast

        let humidity = rawData.main.temp_min 
        let humidity_text = document.querySelector('#humidity')
        let humidity_per =  `${humidity} %`        
        humidity_text.innerHTML= humidity_per        
    })

}

function clearData(){
    document.getElementById("city").value = "";
    document.getElementById("high-temp").innerHTML = "";
    document.getElementById("low-temp").innerHTML = "";
    document.getElementById("forecast").innerHTML = "";
    document.getElementById("humidity").innerHTML = "";  
}
