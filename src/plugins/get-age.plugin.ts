const getAgePlugin = require('get-age');

export const getAge = ( birthDate: string ) => {
    // if ( !birthDate ) return new Error('birthdate is required');
    // console.log({ currentYear: new Date().getFullYear() });
    // return getAgePlugin(birthDate);
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}
