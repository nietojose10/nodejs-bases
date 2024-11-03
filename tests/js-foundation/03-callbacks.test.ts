import { getUserById, users } from '../../src/js-foundation/03-callbacks';

describe('03-callbacks Tests', () => { 
    test('getUserById should return an error if user does not exist', (done) => { 

        const id = 10;
        getUserById( id, ( err, user ) => {
           
            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();

        //!Done parameter says to an async function when it has finished.
            done();

        });

    }); 

    test('getUserById should return user with ID 1', (done) => { 

        const id = 1;
        getUserById( id, ( err, user ) => {

            expect( err ).toBeUndefined();
            expect( user ).toEqual({
                id: 1,
                name: 'John Doe',
            });

            done();

        });

    })

})