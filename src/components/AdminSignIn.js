import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const AdminSignIn = ({ signOut, user }) => {
  console.log(user);
  return (
    <>
      <h1>Hello {user.attributes.email}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default withAuthenticator(AdminSignIn, { hideSignUp: true });
