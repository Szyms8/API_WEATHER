const inputV = document.querySelector('input')
const buttonV = document.querySelector('button')
const cityNameV = document.querySelector('.city-name')
const warningV = document.querySelector('.warning')
const photoV = document.querySelector('.photo')
const weatherV = document.querySelector('.weather')
const temperatureV = document.querySelector('.temperature')
const humidityV = document.querySelector('.humidity')
const showDetails = document.querySelectorAll(".show-details")
const blurReverseV = document.querySelector(".blur-reverse")


// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ca7f8bb3cff3db5a8a606392b72c0989
// const URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=ca7f8bb3cff3db5a8a606392b72c0989"
// const URL = "api.openweathermap.org/data/2.5/weather?q="+inputV.value+"uk&APPID=ca7f8bb3cff3db5a8a606392b72c0989"
// const KEY_API = "uk&APPID=ca7f8bb3cff3db5a8a606392b72c0989"
// const city = inputV.value("London")
// const URL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ca7f8bb3cff3db5a8a606392b72c0989"




const LINK_API = "https://api.openweathermap.org/data/2.5/weather?q="
const KEY_API = "&appid=ca7f8bb3cff3db5a8a606392b72c0989"
const UNIT_API = "&units=metric"


const getWeather = () => {
    const city = inputV.value || "nakło"
    const URL = LINK_API + city + KEY_API + UNIT_API
    inputV.value = ""
    warningV.textContent = ""
    
    
    axios.get(URL).then(res => {
        console.log(res.data)
        const temperatureOfAir = res.data.main.temp
        const humidityOfAir = res.data.main.humidity
        const readWeather = res.data.weather[0].description
        const picture = res.data.weather[0].id
        
        
        cityNameV.textContent = res.data.name
        temperatureV.textContent = Math.floor(temperatureOfAir) + "°C"
        humidityV.textContent = humidityOfAir + "%"
        weatherV.textContent = readWeather
        photoV.textContent = picture
        
        
        if (picture >= 200 && picture < 300) {
            photoV.setAttribute("src","img/thunderstorm.png")
        } else if (picture >= 300 && picture <=321){
            photoV.setAttribute("src","img/drizzle.png")
        } else if (picture >= 500 && picture <=531){
            photoV.setAttribute("src","img/rain.png")
        } else if (picture >= 600 && picture <=622){
            photoV.setAttribute("src","img/ice.png")
        } else if (picture >= 701 && picture <=781){
            photoV.setAttribute("src","img/fog.png")
        } else if (picture === 800){
            photoV.setAttribute("src","img/sun.png")
        } else if (picture >=801 && picture <=900){
            photoV.setAttribute("src","img/cloud.png")
            
        } else {
            photoV.setAttribute("src","img/unknown.png")
            
        }
        
        
    
    }).catch(()=> warningV.textContent = "error, enter the correct city name")

   
}  
    
getWeather()

function toggler (){
    blurReverseV.classList.toggle("blur-reverse-show")
}



buttonV.addEventListener("click", getWeather)
showDetails.forEach((x) => x.addEventListener("click", toggler))










 // fetch(URL)
    // .then(res => res.json())
    // .then(res => console.log(res)) 
    // .then((data) => {
    //     cityName.textContent = data.main.name

    //     // const cityFromApi = data["main"]["name"]
    // })
// const temperature = res.data.main.temp
// const humidityOfAir = res.data.main.humidity
// console.log(temp);
//  const URL = "https://api.openweathermap.org/data/2.5/weather?q=Londyn&appid=ca7f8bb3cff3db5a8a606392b72c0989"