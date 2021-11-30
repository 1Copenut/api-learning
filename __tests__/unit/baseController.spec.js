const baseController = require("../../src/controllers/baseController");

it("Returns a test signal", async () => {
  const mockedSignal = "Good test signal";
  const response = await baseController(mockedSignal);

  expect(response).toEqual("Good test signal");
});
