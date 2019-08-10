const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

console.log(process.argv[2])
console.log(process.argv)

if (!process.argv[2]) {

    return console.log("You need to provide location")

}


geocode(process.argv[2], (error, data) => {


    if (error) {
        return console.log(error)
    } 

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        } 



        console.log("In " + data.location +": " +forecastData)
      })

    
})