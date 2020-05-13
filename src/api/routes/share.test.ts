import supertest from "supertest";
import app from "../";

const request = supertest(app);

describe("Test add share endpoint", () => {
  it("Valid share", async done => {
    const response = await request
      .post("/api/share/add")
      .send({
        name: "Tom",
        friendName: "Dan",
        friendEmail: "thomasbracetestsmtp@hotmail.com",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Tom");
    done();
  });

  it("Invalid share", async done => {
    const response = await request
      .post("/api/share/add")
      .send({ name: "Tom", friendEmail: "thomasbracetestsmtp@hotmail.com" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid email", async done => {
    const response = await request
      .post("/api/share/add")
      .send({ name: "Tom", friendName: "Dan", friendEmail: "gmail" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid email");
    done();
  });

  it("ID already exists", async done => {
    const response = await request
      .post("/api/share/add")
      .send({
        id: 1,
        name: "Tom",
        friendName: "Dan",
        friendEmail: "thomasbracetestsmtp@hotmail.com",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Unknown error has occurred");
    done();
  });
});
