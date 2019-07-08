const { HOOD_NAMES } = require('@venncity/schema-consts');
const { building } = require('@venncity/test-helper');
const handler = require('./handler');

describe('TODO: demoService', () => {
  test('TODO: myFunction', async () => {
    // Prepare data for test.
    const response = await handler.myFunction();
    expect(JSON.parse(response.body)).toEqual(10);
    // const overrides = { hood: { connect: { name: HOOD_NAMES.SHAPIRA } } };
    // const myBuilding = await building.createBuilding({ overrides })
    // // TODO: Implement...
    //
    // // Execute lambda.
    // const response = await handler.myFunction({ minimumFloors: 5 });
    //
    // // Verify.
    // // TODO: Implement...
    // expect(response.statusCode).toEqual(200);
    // expect(Array.isArray(JSON.parse(response.body).units)).toBeTruthy();
  });
});
