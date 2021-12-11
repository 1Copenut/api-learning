import axios from 'axios';
import categoriesController from '../../server/controllers/categories';

jest.mock("axios");

describe("Categories controller", () => {
  it("Returns categories data by GET request", async () => {
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

    const data = await categoriesController(
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
