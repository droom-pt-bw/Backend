const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {

    it("should set the test env", () =>{
        expect(process.env.DB_ENV).toBe("testing");
   });

  describe('GET /', () => {

      it("it should return 200 using async/await", async() => {
          const res = await request(server).get("/");
          expect(res.status).toBe(200) 
      });

      
      it("it should return application/json using async/await", async() => {
          const res = await request(server).get("/");
          expect(res.type).toBe("application/json") 
      });

      it("it should return 'It's alive!'", async() => {
          const res = await request(server).get("/");
          expect(res.body).toEqual({message: "It's alive!"})
      });
  })
})

