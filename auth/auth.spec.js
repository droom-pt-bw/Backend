const request = require('supertest');
const server = require("../api/server");
const db = require("../data/dbConfig");


describe('authRoutes', () => {

   

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

        it("should return 200 if user is in test DB", async () =>{

            const testUser = {
                username: "John", 
                password: "something"
              };
              const res = await request(server)
                 .post('/login')
                 .send(testUser)
                 .set('Content-Type', 'application/json');
              expect(res.status).toEqual(200)
        })
    })
})