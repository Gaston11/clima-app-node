const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

//console.log(argv.direccion);

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `no se pudo determinar el clima en la ciudad ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(info => console.log(info))
    .catch(error => console.log(error))