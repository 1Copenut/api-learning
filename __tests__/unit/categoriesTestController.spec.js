const axios = require('axios');
const categoriesTestController = require('../../src/controllers/categoriesTestController');
const { EIA_KEY } = require('../../src/constants/constants');

// jest.mock('axios');

it('Returns categories test data', async () => {
  // axios.get.mockResolvedValue({
  //   request: {
  //     category_id: 714755,
  //     command: 'category',
  //   },
  //   category: {
  //     category_id: '714755',
  //     parent_category_id: '371',
  //     name: 'Petroleum',
  //     notes: '',
  //     childcategories: [
  //       {
  //         category_id: 714756,
  //         name: 'Summary',
  //       },
  //       {
  //         category_id: 714757,
  //         name: 'Prices',
  //       },
  //       {
  //         category_id: 714758,
  //         name: 'Crude Reserves and Production',
  //       },
  //       {
  //         category_id: 714759,
  //         name: 'Refining and Processing',
  //       },
  //       {
  //         category_id: 714760,
  //         name: 'Imports/Exports and Movements',
  //       },
  //       {
  //         category_id: 714802,
  //         name: 'Stocks',
  //       },
  //       {
  //         category_id: 714803,
  //         name: 'Consumption/Sales',
  //       },
  //     ],
  //     childseries: [],
  //   },
  // });
  const data = await categoriesTestController(
    'https://api.eia.gov/',
    EIA_KEY,
    '714755'
  );
  expect(data).toEqual('testing');
});
