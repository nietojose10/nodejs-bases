import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('06-promises Tests', () => { 

    test('getPokemonById should return a pokemon', async() => { 

        const pokemonID = 1;
        const pokemonName = await getPokemonById(pokemonID);
        expect( pokemonName ).toBe('bulbasaur');

    });

    test('should return an error if pokemon does not exist', async() => { 

        const pokemonId = 100000000;
        try {
            
            await getPokemonById( pokemonId );
            // expect(true).toBeFalsy();

        } catch (error) {
            expect(error).toBe(`pokemon not found with id ${ pokemonId }`);
        }
    });

    //!Another way to test the same of above
    //*Aquí le decimos a Jest que la función siempre va a fallar, y en toThrow le indicamos el mensaje de error de la función
    //*De esta manera hay que regresar un objecto error en vez de un string como lo hacemos arriba.
    // test('it should return an error if the pokemon does not exist', async () => {
	// 	const pokemonId = 1_000_000_000;
 
	// 	await expect(getPokemonById(pokemonId)).rejects.toThrow(
	// 		`pokemon not found with id ${pokemonId}`
	// 	); 
	// });

    //!Another way to test the same of above
    //*con el expect.assertions(1) le decimos a jest que se espera que el expect sea 
    //*llamado una vez (en caso de que la promesa haya sido resuelta de forma exitosa 
    //*y no pase al catch, por lo que no llamaría al expect).
    //*Si regresamos un objecto error entonces debemos usar error.message en argumento del expect
    // test('it should return an error if the pokemon does not exist', async () => {
	// 	const pokemonId = 1_000_000_000;
 
	// 	expect.assertions(1);
 
	// 	await getPokemonById(pokemonId).catch(error =>
	// 	 	expect(error).toBe(`pokemon not found with id ${pokemonId}`)
	// 	 );
	// });

})