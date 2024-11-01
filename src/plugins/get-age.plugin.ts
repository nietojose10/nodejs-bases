const getAgePlugin = require('get-age');

export const getAge = ( birthDate: string ) => {
    // if ( !birthDate ) return new Error('birthdate is required');

    return getAgePlugin(birthDate);
}
