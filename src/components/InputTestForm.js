import React, { useState } from "react";
import { API } from "aws-amplify";
import { createFormInputTest } from "./graphql/mutations";

const InputTestForm = () => {
  // Define state variables to store the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // PUT LOGIC FOR REFERENCING AWS DB AND SUBMISSION OF DATA INPUTS HERE:
    await API.graphql({
      query: createFormInputTest,
      variables: {
        input: {
          Name: "Lorem ipsum dolor sit amet",
          PhoneNumber: "(555) 123-6789",
          Email: "test12346789@testemailtestemail.com",
        },
      },
    })
      .then((res) => {
        // Show successmessage
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
  };

  return (
    <div>
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone number">Phone Number:</label>
          <input
            type="phone number"
            id="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InputTestForm;
