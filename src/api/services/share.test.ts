import { addShare } from "./share";

describe("Add Share", () => {
  it("Valid share", async done => {
    const { share } = await addShare({
      name: "Tom",
      friendName: "Dan",
      friendEmail: "thomasbracetestsmtp@hotmail.com",
    });

    const name = share.get("name", { plain: true });

    expect(name).toEqual("Tom");
    done();
  });

  it("Invalid share", async done => {
    const { share, error } = await addShare({
      name: "Tom",
      friendName: "Dan",
    });

    expect(share).toBeNull();
    expect(error).not.toBeNull();
    done();
  });
});
