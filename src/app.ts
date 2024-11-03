
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { getUUID, getAge } = require('./plugins');
// const getPokemonById = require('./js-foundation/06-promises');

// import { buildLogger } from "./plugins/logger.plugin";

//!Logs Plugin
// const logger = buildLogger('app.js');

// logger.log('Hola Mundo');
// logger.error('Esto es algo malo');

//!Promises example
// getPokemonById(4)
//     .then( ( pokemon ) => console.log({pokemon}))
//     .catch( ( err ) => console.log('Por favor intente de nuevo'))
//     .finally( () => console.log('Finalmente'));

// Token de acceso
// Publicas

//!Factory example
// const makePerson = buildMakePerson({ getUUID, getAge  });

// const obj = { name: 'John', birthdate: '1995-10-13' };

// const john = makePerson( obj );

// console.log({ john });
