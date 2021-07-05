# OpenWeather
![Weather](https://github.com/woodRock/expert-chainsaw/workflows/Weather/badge.svg)

This GitHub Action used the [Open Weather API](https://openweathermap.org/api) to display the weather forecast for a given area. 
The weather forecast is displayed within predefined tags (hidden inside HTML comments), such that it does not overwrite any other existing content in a README. 

![image](https://user-images.githubusercontent.com/82754634/124409721-6b8c3a00-dd7b-11eb-9748-586c09407218.png)

-----------------------------
# Steps:

## Runs on [PUSH]

## 1: Input OPEN_WEATHER_TOKEN key

## 2: Go to .github/workflows/weather.yml

Input name in:

`who-to=greet: name`

## 3: Commit change

## 4: Workflow starts in Actions

## 5: README - modified with current weather

## 6: Workflow outputs - Personalised greeting with timestamp

------------------------------

## Forecast

<!-- FEED-START -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="keywords" content="weather, world, openweathermap, weather, layer" />
  <meta name="description" content="A layer with current weather conditions in cities for world wide" />
  <meta name="domain" content="openweathermap.org" />
  <meta http-equiv="pragma" content="no-cache" />
  <meta http-equiv="Expires" content="-1" />
</head>
<body>
  <div style="font-size: medium; font-weight: bold; margin-bottom: 0px;">Singapore</div>
  <div style="float: left; width: 130px;">
    <div style="display: block; clear: left;">
      <div style="float: left;" title="Titel">
        <img height="45" width="45" style="border: medium none; width: 45px; height: 45px; background: url(&quot;http://openweathermap.org/img/w/04d.png&quot;) repeat scroll 0% 0% transparent;" alt="title" src="http://openweathermap.org/images/transparent.png"/>
      </div>
      <div style="float: left;">
        <div style="display: block; clear: left; font-size: medium; font-weight: bold; padding: 0pt 3pt;" title="Current Temperature">29.69°C</div>
        <div style="display: block; width: 85px; overflow: visible;"></div>
      </div>
    </div>
    <div style="display: block; clear: left; font-size: small;">Clouds: 75%</div>
    <div style="display: block; clear: left; color: gray; font-size: x-small;" >Humidity: 80%</div>
    <div style="display: block; clear: left; color: gray; font-size: x-small;" >Wind: 4.63 m/s</div>
    <div style="display: block; clear: left; color: gray; font-size: x-small;" >Pressure: 1009hpa</div>
  </div>
  <div style="display: block; clear: left; color: gray; font-size: x-small;">
    <a href="http://openweathermap.org/city/1880252?utm_source=openweathermap&utm_medium=widget&utm_campaign=html_old" target="_blank">More..</a>
  </div>
  
</body>
</html>
<!-- FEED-END -->
