import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch"
import Welcome from "./pages/welcome";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user.username);
  };

  return (
        <Router>
        <div>
          <Switch>                    
            <Route exact path="/" >
              <AmplifySignOut />
              <button onClick={getUser}> Make Api Call Test</button>
              <Welcome />
              <Profile />
              <ProfileForm />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};
export default withAuthenticator(App);
