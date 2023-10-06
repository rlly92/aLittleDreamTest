/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFormInputTest = /* GraphQL */ `
  mutation CreateFormInputTest(
    $input: CreateFormInputTestInput!
    $condition: ModelFormInputTestConditionInput
  ) {
    createFormInputTest(input: $input, condition: $condition) {
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
export const updateFormInputTest = /* GraphQL */ `
  mutation UpdateFormInputTest(
    $input: UpdateFormInputTestInput!
    $condition: ModelFormInputTestConditionInput
  ) {
    updateFormInputTest(input: $input, condition: $condition) {
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
export const deleteFormInputTest = /* GraphQL */ `
  mutation DeleteFormInputTest(
    $input: DeleteFormInputTestInput!
    $condition: ModelFormInputTestConditionInput
  ) {
    deleteFormInputTest(input: $input, condition: $condition) {
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
