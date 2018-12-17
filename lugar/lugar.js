const axios = require('axios');
const argv = require('yargs');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para la ciudad ${direccion}`);
    }

    //console.log(JSON.stringify(resp.data, undefined, 1)); // para hacer el desglose de los objetos q tiene dentro
    // 4 es el espaciado
    ///console.log(JSON.stringify(location, undefined, 3));

    let location = resp.data.results[0];
    let coor = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }
}

/*let encodedUrl = encodeURI(argv.direccion);

//axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    .then(resp => {
        //console.log(JSON.stringify(resp.data, undefined, 1)); // para hacer el desglose de los objetos q tiene dentro
        // 4 es el espaciado

        let location = resp.data.results[0];
        //console.log(JSON.stringify(location, undefined, 3));
        let coor = location.geometry.location;

        console.log('direccion:', location.formatted_address);
        console.log('lat', coor.lat);
        console.log('lng', coor.lng);

    })
    .catch(e => console.log('ERROR!!!', e));
*/

module.exports = {
    getLugarLatLng
}