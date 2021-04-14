import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import API from "../utils/API";

const Welcome = () => {
  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const uuid = user.attributes.sub;
    const username = user.username;
    console.log({ username }, { uuid });
  };

  return <div>{<button onClick={checkUser}> Check Function </button>}</div>;
};

// const App = () => {
//     const getUser = async () => {
//       const user = await Auth.currentAuthenticatedUser();
//       console.log(user.username);
//       console.log(user.attributes.sub);
//     };

export default withAuthenticator(Welcome);
