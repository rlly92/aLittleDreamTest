/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFormInputTest = /* GraphQL */ `
  query GetFormInputTest($id: ID!) {
    getFormInputTest(id: $id) {
      id
      Name
      PhoneNumber
      Email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFormInputTests = /* GraphQL */ `
  query ListFormInputTests(
    $filter: ModelFormInputTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormInputTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        PhoneNumber
        Email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
