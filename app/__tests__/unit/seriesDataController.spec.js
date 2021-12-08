const axios = require("axios");
const seriesDataController = require("../../controllers/seriesDataController");

jest.mock("axios");

describe("Series data endpoint", () => {
  it("Returns series data", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          request: {
            command: "series",
            series_id: "PET.W_EPM0F_YPY_R10_MBBLD.4",
          },
          series: [
            {
              series_id: "PET.W_EPM0F_YPY_R10_MBBLD.4",
              name: "East Coast (PADD 1) Refiner Net Production of Finished Motor Gasoline, 4 Week Avg",
              units: "Thousand Barrels per Day",
              f: "4",
              unitsshort: "Mbbl/d",
              description:
                "East Coast (PADD 1) Refiner Net Production of Finished Motor Gasoline",
              copyright: "None",
              source: "EIA, U.S. Energy Information Administration",
              geography:
                "USA-CT+USA-DC+USA-DE+USA-FL+USA-GA+USA-MA+USA-MD+USA-ME+USA-NC+USA-NH+USA-NJ+USA-NY+USA-PA+USA-RI+USA-SC+USA-VA+USA-VT+USA-WV",
              start: "20100604",
              end: "20211126",
              updated: "2021-12-01T13:24:49-0500",
              data: [["20211126", 53]],
            },
          ],
        },
      ],
    });

    const data = await seriesDataController(
      "https://localhost:3000",
      "12345",
      "PET.W_EPM0F_YPY_R10_MBBLD.4"
    );

    expect(data).toEqual([
      {
        request: {
          command: "series",
          series_id: "PET.W_EPM0F_YPY_R10_MBBLD.4",
        },
        series: [
          {
            series_id: "PET.W_EPM0F_YPY_R10_MBBLD.4",
            name: "East Coast (PADD 1) Refiner Net Production of Finished Motor Gasoline, 4 Week Avg",
            units: "Thousand Barrels per Day",
            f: "4",
            unitsshort: "Mbbl/d",
            description:
              "East Coast (PADD 1) Refiner Net Production of Finished Motor Gasoline",
            copyright: "None",
            source: "EIA, U.S. Energy Information Administration",
            geography:
              "USA-CT+USA-DC+USA-DE+USA-FL+USA-GA+USA-MA+USA-MD+USA-ME+USA-NC+USA-NH+USA-NJ+USA-NY+USA-PA+USA-RI+USA-SC+USA-VA+USA-VT+USA-WV",
            start: "20100604",
            end: "20211126",
            updated: "2021-12-01T13:24:49-0500",
            data: [["20211126", 53]],
          },
        ],
      },
    ]);
  });
});
