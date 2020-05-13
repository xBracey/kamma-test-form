import { isValidShare } from "./type";

describe("Test isValidShare", () => {
  it("Valid", async done => {
    const validShare = isValidShare({
      name: "Tom",
      friendName: "Dan",
      friendEmail: "dan@gmail.com",
    });

    expect(validShare).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validShare = isValidShare({
      name: "Tom",
      friendEmail: "dan@gmail.com",
    });

    expect(validShare).toBe(false);
    done();
  });

  it("Not Object", async done => {
    const validShare = isValidShare("Tom");

    expect(validShare).toBe(false);
    done();
  });
});
