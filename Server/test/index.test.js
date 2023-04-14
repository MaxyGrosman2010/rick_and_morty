const server = require('../src/server');
const session = require('supertest');
const request = session(server);

describe("Testing routes", () => {

    describe("Testing characters routes", () => {
        it("Response with status: 200", async() => {
            let res = await request.get('/rickandmorty/character/1');
            expect(res.statusCode).toBe(200);
        });
        it('Object with "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
            let {body} = await request.get('/rickandmorty/character/1');
            expect(body).toHaveProperty('id');
            expect(body).toHaveProperty('name');
            expect(body).toHaveProperty('species');
            expect(body).toHaveProperty('gender');
            expect(body).toHaveProperty('status');
            expect(body).toHaveProperty('origin');
            expect(body).toHaveProperty('image');
        });
        it('If there is an error return status: 500', async() => {
            let res = await request.get('/rickandmorty/character/0');
            expect(res.statusCode).toBe(500);
        });
    });

    describe("Testing login routes", () => {
        it("Response with status: 200", async() => {
            let res = await request.get('/rickandmorty/users/login/?email=max@gmail.com&password=marcos1');
            expect(res.statusCode).toBe(200);
        });
        it("Login successful", async() => {
            let {body} = await request.get('/rickandmorty/users/login/?email=max@gmail.com&password=marcos1');
            expect(body).toHaveProperty('access');
            expect(body.access).toBe(true);
        });
        it("Logout successful", async() => {
            let {body} = await request.get('/rickandmorty/users/login/?email=ax@gmail.com&password=1234');
            expect(body).toHaveProperty('access');
            expect(body.access).toBe(false);
        });
    });
});