let weatherData = {};
let tdescription = document.getElementsByClassName('field-description')[0];
let tvalue = document.getElementsByClassName('field-value')[0];
 
//API Call
	fetch('https://api.open-meteo.com/v1/forecast?latitude=53.33&longitude=-6.25&current_weather=true')
		.then(response => response.json())
		.then(data => {
			console.log(data);


   //default behaviour for showing the  most api response data
   tvalue.innerText = "Temperature (°C)"; //display weather type 
   tdescription.innerText = data.current_weather.temperature;  //display weather data 
		});