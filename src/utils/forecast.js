const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f6498452f1a5f5bb5c71f19c05146157&query=' + latitude +','+ longitude + '&units=f'
      
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service. Sorry ya jabroni', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        }
        else{
            callback(undefined, 
                body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degrees out. It currently feels like ' + body.current.feelslike + ' degrees. The humidity level is ' + body.current.humidity + '% and the UV index is ' + body.current.uv_index + '.' 
                )
        }
    })
}

module.exports = forecast