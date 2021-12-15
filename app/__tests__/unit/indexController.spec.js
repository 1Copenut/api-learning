import indexController from '../../server/controllers';

describe("Index controller", () => {
  it("Returns a test signal", async () => {
    const mockedSignal = "Good test signal";
    const response = await indexController(mockedSignal);

    expect(response).toEqual("Good test signal");
  });
});
