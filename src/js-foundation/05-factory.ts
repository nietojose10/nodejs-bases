

// const { getAge } = require('../plugins/get-age.plugin');
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge, getUUID } = require('../plugins');
interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

//*Factory functions are useful to send our dependecies as parameters
//*The structure of a factory function is a normal function that returns another function
export const buildMakePerson = ({ getUUID, getAge }: BuildMakePersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

//!This was as we had before
// const buildPerson = ({ getUUID, getAge }) => {

//         return {
//             id: getUUID(),
//             name: name,
//             birthdate: birthdate,
//             age: getAge(birthdate),
//         }
// }


// const obj = { name: 'John', birthdate: '1995-10-13' };

// const john = buildPerson( obj );

// console.log(john);