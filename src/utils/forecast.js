const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d8683e29312a0e35f8198559d39bd3ea&query=' + longitude + ',' + latitude + '&units=f'

    request({url, json: true}, (error, {body} = {}) => {

        if (error){
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const currentTemp = body.current.temperature
            const feelsLike = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]
            callback(undefined, 'Currently, it is ' + currentTemp + ' degrees and ' + weatherDescription +   ' but feels like ' + feelsLike + ' degrees.')
        }
    })
}

module.exports = forecast