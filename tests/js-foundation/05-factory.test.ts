import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('05-factory tests', () => { 

    const getUUID = () => '1234';
    const getAge = () => 35;

    test('buildMakePerson should return a function', () => { 
        
        const makePerson = buildMakePerson({ getUUID, getAge });

        expect( typeof makePerson).toBe('function');

    });

    test('MakePerson should return a person', () => { 

        const makePerson = buildMakePerson({ getUUID, getAge });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '1995-10-14' });
        
        expect(johnDoe).toEqual({ id: '1234', 
            name: 'John Doe', 
            birthdate: '1995-10-14', 
            age: 35 
        });

    });

});