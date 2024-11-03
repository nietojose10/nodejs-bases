import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugin.ts', () => { 

    test('getAge() should return the age of a person', () => { 

        const birthday = '1995-10-13';
        const age = getAge(birthday);

        expect( typeof age ).toBe('number');

    });

    test('getAge should return current age', () => { 

        const birthdate = '1995-10-13';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect( age ).toBe( calculatedAge );


    });

    test('getAge should return 0 years', () => { 
        
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birhtdate = '1995-10-13';
        const age = getAge(birhtdate);

        // console.log({ age });
        expect( age ).toBe(0);
        expect( spy ).toHaveBeenCalled();

    });

});