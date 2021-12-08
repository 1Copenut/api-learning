const baseController = require("../../controllers/baseController");

describe("Base controller", () => {
  it("Returns a test signal", async () => {
    const mockedSignal = "Good test signal";
    const response = await baseController(mockedSignal);

    expect(response).toEqual("Good test signal");
  });
});
