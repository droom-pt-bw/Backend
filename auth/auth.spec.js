const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

function generateUser() {
  let id = 0;
  return function createUser() {
    id++;
    return {
      username: `TestUser${id}`,
      password: "testing",
      email: `TestEmail${id}@email.com`,
      isCompany: false
    };
  };
}

const newUser = generateUser();

describe("authRoutes", () => {
  describe("login", () => {
    it("should return 401 info is not in db ", async () => {
      const newUser = {
        username: "Pacman",
        password: "flyman"
      };
      const res = await request(server)
        .post("/login")
        .send(newUser);
      expect(res.status).toBe(401);
    });
    it("should return 'NO NO NO' if bad info", async () => {
      const newUser = {
        username: "HackerLover",
        password: "openthedoor12"
      };
      const res = await request(server)
        .post("/login")
        .send(newUser);
      expect(res.body).toEqual({ message: "NO NO NO" });
    });

    it("should return 200 if user is in test DB", async () => {
      const testUser = {
        username: "John",
        password: "something"
      };
      const res = await request(server)
        .post("/login")
        .send(testUser)
        .set("Content-Type", "application/json");
      expect(res.status).toEqual(200);
    });
  });
  describe("register", () => {
    afterAll(async () => {
      await db("users")
        .where("email", "like", "TestEmail%@email.com")
        .del();
    });
    it("should return 400 if no cred are added", async () => {
      const res = await request(server)
        .post("/register")
        .send({})
        .set("Content-Type", "application/json");
      expect(res.status).toEqual(400);
    });

    it("Should 201 if user is created", async () => {
      const response = await request(server)
        .post("/register")
        .send(newUser())
        .set("Content-Type", "application/json");
      expect(response.status).toBe(201);
    });
  });
});
