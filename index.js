var inputvalue = document.querySelector(`#cityinput`)
var btn = document.querySelector(`#add`)
var city = document.querySelector(`#cityinput`)
var descip = document.querySelector(`#description`)
var temp = document.querySelector(`#temp`)
var wind = document.querySelector(`#wind`)
apik ="63a90ae96d390ec37d6c1252fa86ela"
function convertion(val)
{
  return(val - 273).toFixed(3)
}

btn.addEventListerner(`click`, function()
{
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  fetch(`https://api.openweathermap.org/data/2.5/weather?q= +inputvalue.value+`&appid=`+apik`)
  .then(res => res .json())
  
  .then(data =>
       {
    var nameval = data[`name`]
    var descrip = data[`weather`][`0`][`description`]
    var temperature = data[`main`][`temp`]
    var wndspeed = data[`wind`][`speed`]
    
    city.innerHTML =`Weather of <span>${nameval}<span>`
    temp.innerHTML =`Temperature: <span>${ convertion(tempature)} C</span>` 
    description.innerHTML = `Sky Conditions:<span>${descrip}<span>`
    wind.innerHTML = `Wind speed: <span>${windspeed} km/h<span>`
    
  })
}
                      
                      }