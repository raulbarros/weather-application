const form = document.querySelector('[data-js="change-location"]')
// const cityInput = form.city
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]') // dia ou noite
const timeIconContainer = document.querySelector('[data-js="time-icon"]') // dia ou noite 
// console.log(cityCard.classList.contains('d-none'))
// console.log(Array.from(cityCard.classList).includes('d-none'))

form.addEventListener('submit', event => {
    event.preventDefault()
    const cityName = event.target.city.value || ''

    if (cityName) {

        getDataInformation(cityName)

    }
})

const getDataInformation = async cityName => {
    const [{ Key, LocalizedName }] = await getCityData(cityName)
    const [
        {
            WeatherText,
            Temperature /*: {Metric : { Value }}*/,
            isDayTime,
            WeatherIcon
        }
    ] = await getCityWeather(Key)

    showCityWeatherInfo(
        LocalizedName
        , WeatherText
        ,Temperature
        , isDayTime
        , WeatherIcon)

    form.reset()
}

const showCityCard = () => {
    if (cityCard.classList.contains('d-none')) {
        cityCard.classList.remove('d-none')
    }
}

const showCityWeatherInfo = (
    LocalizedName
    , WeatherText
    ,Temperature
    , isDayTime
    , WeatherIcon) => {
    const timeIconImg = `<img src='./src/icons/${WeatherIcon}.svg' />`

    showCityCard()

    timeImg.src = isDayTime ? './src/day.svg' : './src/night.svg'
    timeIconContainer.innerHTML = timeIconImg

    cityNameContainer.innerHTML = LocalizedName
    cityWeatherContainer.innerHTML = WeatherText
    cityTemperatureContainer.innerHTML = Temperature.Metric.Value//Value

    // const divWeatherDetails = document.querySelector('[data-js="weather-details"]')
    // const divCityName = divWeatherDetails.querySelector('h5')
    // const divWeather = divWeatherDetails.querySelector('div.my-3')
    // const divTemperature = divWeatherDetails.querySelector('div.my-4 span')
    // divCityName.innerHTML = LocalizedName
    // divWeather.innerHTML = WeatherText
    // divTemperature.innerHTML = Temperature.Metric.Value//Value
}