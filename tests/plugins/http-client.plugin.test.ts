import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe('httpClientPlugin Tests', () => { 

    test('httpClientPlugin() should return a string', async() => { 
        
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        });

    });

    test('httpClientPlugin should have POST, PUT and Delete methods', () => { 
        
        const httpPlugin = httpClientPlugin;
        console.log(httpPlugin);
        expect( typeof httpPlugin.post).toBe('function');
        expect( typeof httpPlugin.put).toBe('function');
        expect( typeof httpPlugin.delete).toBe('function');

    })

});