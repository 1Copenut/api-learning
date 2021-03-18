const fetch = require('node-fetch');
const app = require('../dist/app');

jest.mock('node-fetch');

describe('The API returns correct values', () => {
  it('Returns the test signal', async () => {
    /**
     * This test fails, and I'm not sure why
     *
     * expect(received).toEqual(expected) // deep equality
     * Expected: "Whiskey Tango Foxtrot"
     * Received: [Function fetch]
     */
    const asyncMock = fetch.mockResolvedValue('Wrong test signal');
    console.log(asyncMock());

    await app.get('http://localhost:3001');

    expect(asyncMock).toEqual('Whiskey Tango Foxtrot');
  });
});
