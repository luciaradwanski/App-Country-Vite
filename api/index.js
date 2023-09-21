// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');
// const axios = require('axios');
// const { Country } = require('./src/db.js');

// // Syncing all the models at once.
// conn.sync({ force: false }).then(async function () {
//   await countriesLoaded(); // busca datos de la API y carga a BD
//   server.listen(3001, () => {
//     console.log('🚀 listening at 3001'); // eslint-disable-line no-console
//   });
// });

// async function countriesLoaded() {
//   try {
//     const countriesApi = await axios.get('https://restcountries.com/v3.1/all');
//     // paso a BD
//     await Promise.all(countriesApi.data.map(async (c) => {
//       await Country.findOrCreate({
//         where: { id: c.cca3 },
//         defaults: {
//           name: c.name.common,
//           image: c.flags.png,
//           continent: c.continents[0],
//           capital: c.capital ? c.capital[0] : 'No Data',
//           subregion: c.subregion ? c.subregion : 'No Data',
//           area: c.area,
//           population: c.population,
//         },
//       });
//     }));
//   } catch (error) {
//     console.error('Error al cargar los datos a la BD:', error);
//   }
// }
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(async function () {
  try {
    // Consulta todos los países en la base de datos
    const countries = await Country.findAll();

    // Hacer algo con los datos de los países, por ejemplo, imprimirlos en la consola
    countries.forEach((country) => {
      console.log(`Nombre: ${country.name}, Capital: ${country.capital}, Continente: ${country.continent}`);
    });

    server.listen(3001, () => {
      console.log('🚀 listening at 3001');
    });
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
  }
});
