import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import API from "../utils/API";

function Welcome() {
  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const uuid = user.attributes.sub;
    const username = user.username;
    const ID = await API.checkUser(uuid, username);
    console.log({ ID });
  };

  return <div>{<button onClick={checkUser}> Check Function </button>}</div>;
}

export default withAuthenticator(Welcome);
