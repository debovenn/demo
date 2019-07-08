process.env.FUNCTION_NAME = 'myFunction';
const { wrap } = require('@venncity/base-lambda');

async function myFunction() {
  // // TODO: Replace with real implementation...
  // const responseBody = {
  //   units: []
  // };
  //
  // //
  // const demoQuery = gql`
  //       query getUnitByMinimumFloors($minimumFloors: Int) {
  //           units(where: { floor_gte: $minimumFloors}) {
  //               id
  //           }
  //       }`;
  // const demoQueryResponse = await graphqlClient({}).query({
  //   query: demoQuery,
  //   variables: { minimumFloors: arguments[0].minimumFloors }
  // });
  //
  // responseBody.units = demoQueryResponse.data.units;
  console.log('Welcome to Debo Demo Session');
  const response = 10;
  return response;
}

module.exports = {
  myFunction: wrap(myFunction)
};
