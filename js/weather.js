const APIKey = 'MtL3FAIZ3ECnxgKVuWXLHpMG4AEhswKa'
const genericErrorMsg = 'Não foi possível obter os dados'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName => 
    `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}&language=pt-br`

const getCityWeatherUrl = (Key) => 
    `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`


const genericRequest = async url => {
    try {
        const response = await fetch(url)

        if(!response.ok){
            throw new Error(genericErrorMsg)
        }
        
        //retorna uma promise
        return response.json()
        
    } catch ({name, message}) {
        alert(`Erro: ${name} - ${message}`)        
    }
}
                                //retorna uma promise
const getCityData = cityName => genericRequest(getCityUrl(cityName))
const getCityWeather = async cityKey => await genericRequest(getCityWeatherUrl(cityKey))

// const getCityWeather = async cityName => {
//     const [cityData] = await getCityData(cityName)
//     return await genericRequest(getCityWeatherUrl(cityData))
// }


// const getCityData = async cityName => {
//     try {
//         const cityUrl = getCityUrl(cityName)
//         // desestruturando e pegando só o primeiro item do array
//         const [cityData] = await genericRequest(cityUrl)

//         return cityData
        
//     } catch ({name, message}) {
//         alert(`Erro: ${name} - ${message}`)        
//     }
// }

// const getCityWeather = async cityName => {
    
//     try {
//         const { Key } = await getCityData(cityName)

//         if(Key){
//             const cityWeatherUrl = getCityWeatherUrl(Key)
            
//             // desestruturando e pegando só o primeiro item do array
//             const [cityWeatherData] = await genericRequest(cityWeatherUrl)
            
//             return cityWeatherData
//         } else {
//             console.log('aqui')            
//             alert(`City Weather: ${genericErrorMsg}`)
//         }

//     } catch ({name, message}) {
//         alert(`Erro: ${name} - ${message}`)
//     }
// } 

