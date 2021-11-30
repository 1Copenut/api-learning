const fetch = require("node-fetch");
const categoriesTestController = require("../../src/controllers/categoriesTestController.js");

jest.mock("node-fetch", () => jest.fn());

it("Returns categories test data", async () => {
  const mockData = {
    request: {
      category_id: 714755,
      command: "category",
    },
    category: {
      category_id: "714755",
      parent_category_id: "371",
      name: "Petroleum",
      notes: "",
      childcategories: [
        {
          category_id: 714756,
          name: "Summary",
        },
        {
          category_id: 714757,
          name: "Prices",
        },
        {
          category_id: 714758,
          name: "Crude Reserves and Production",
        },
        {
          category_id: 714759,
          name: "Refining and Processing",
        },
        {
          category_id: 714760,
          name: "Imports/Exports and Movements",
        },
        {
          category_id: 714802,
          name: "Stocks",
        },
        {
          category_id: 714803,
          name: "Consumption/Sales",
        },
      ],
      childseries: [],
    },
  };

  fetch.mockResolvedValue(() => {
    Promise.resolve(mockData);
  });
  const response = await categoriesTestController(
    "http://localhost:3000",
    "12345",
    "testCategory"
  );
  expect(response).toEqual(mockData);
});
