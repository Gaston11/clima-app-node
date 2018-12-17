const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=646fa910af837444226f7dbb0b18ac34`)

    return resp.data.main.temp;
}


module.exports = {
    getClima

}