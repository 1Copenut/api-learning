const axios = require("axios");
const categoriesDataController = require("../../controllers/categoriesDataController");

jest.mock("axios");

describe("Categories data endpoint", () => {
  it("Returns categories data", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          category: {
            category_id: "714755",
            parent_category_id: "371",
            name: "Petroleum",
            notes: "",
          },
        },
      ],
    });

    const data = await categoriesDataController(
      "https://localhost:3000",
      "12345",
      "99"
    );

    expect(data).toEqual([
      {
        category: {
          category_id: "714755",
          name: "Petroleum",
          notes: "",
          parent_category_id: "371",
        },
      },
    ]);
  });
});
