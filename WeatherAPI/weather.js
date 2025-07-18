let Searchbar=document.getElementById("searchbox")
let Searchbutton=document.getElementById("searchbutton")
let City=document.getElementById("cityname")
let Temperature=document.getElementById("Temp")
let SkyCond=document.getElementById("Sky")
let WindSpeed=document.getElementById("Wind")



Searchbutton.addEventListener('click',()=>{
    let name=Searchbar.value;
    console.log(name)
    SearchWeather(name)
})


SearchWeather=(Name)=>{


    console.log("Hii from SearchWeather")
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+Name+"&appid=fc26ca72b1107f872be827a8797b1997&units=metric")
    .then((res)=>{
        return res.json()
    }).then((data)=>{

        updatePage(data)
    }).catch((err)=>{
        console.log(err)
    })
}
let updatePage=(Data)=>{
    console.log(Data)
    let weatherData=Data;


    console.log(weatherData.main.temp)
    let TempValue=weatherData.main.temp
    Temperature.innerHTML=TempValue


    console.log(weatherData.name)
    let NameOfCity=weatherData.name
    City.innerHTML=NameOfCity


    console.log(weatherData.weather[0].description)
    let Clouds=weatherData.weather[0].description
    SkyCond.innerHTML=Clouds


    console.log(weatherData.wind.speed)
    let SpeedOfWind=weatherData.wind.speed
    WindSpeed.innerHTML=SpeedOfWind


}