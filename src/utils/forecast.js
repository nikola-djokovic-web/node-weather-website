const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c8197c8fa98442542e400750169a3abe&query=' + latitude + ',' + longitude
  
    request({url, json: true}, (error, { body }) => {
      if(error){
          callback('Unable to connect to weather service.', undefined)
      }else if(body.error){
          callback('Unable to find location.', undefined)
      }else {
        callback(undefined, body.current.weather_descriptions[0] + ". It's currently " + body.current.temperature + " degrees out. It feels like " +  body.current.feelslike + " degrees out.")
      }
    })
  }


module.exports = forecast