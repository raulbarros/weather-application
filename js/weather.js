const APIKey = 'MtL3FAIZ3ECnxgKVuWXLHpMG4AEhswKa'
const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok){
            throw new Error('Não foi possível obter os dados')
        }
        
        // desestruturando e pegando só o primeiro item do array
        const [cityData] = await response.json()
        return cityData
        
    } catch ({name, message}) {
        alert(`Erro: ${name} - ${message}`)        
    }
}

const getCityWeather = async cityName => {
    
    try {
        const { Key } = await getCityData(cityName)
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(cityWeatherUrl)
        
        if(!response.ok){
            throw new Error('Não foi possível obter os dados')
        }

        const [cityWeatherData] = await response.json()
        return cityWeatherData

    } catch (error) {
        
    }
}

const form = document.querySelector('form')
const cityInput = form.city

cityInput.addEventListener('change', event => {
    const cityName = event.target.value || ''

    if(cityName){
        getCityWeather(cityName)
    }
}) 

