const request = require('supertest');
const server = require("../api/server");
const db = require("../data/dbConfig");


describe('authRoutes', () => {

    afterEach(async () => {
        await db("users").truncate();
      });

    describe("login", () => {
        it("should return 401 info is not in db ", async () =>{
            const newUser = {
                username: 'Pacman', 
                password: "flyman"
              };
              const res = await request(server).post('/login').send(newUser);
              expect(res.status).toBe(401);
        })
        it("should return 'NO NO NO' if bad info", async () =>{
            const newUser = {
                username: 'HackerLover', 
                password: "openthedoor12"
              };
              const res = await request(server).post('/login').send(newUser);
              expect(res.body).toEqual({message: "NO NO NO"})
        })
    })
})