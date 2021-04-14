import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch"
import Welcome from "./pages/welcome";
<<<<<<< HEAD
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import Parameter from "./pages/parametersInput"
=======
import { AmplifySignOut } from "@aws-amplify/ui-react";
>>>>>>> 5c76440e1bfd4e881b6d6e56de3ed3b7a0391336

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
              <NoMatch />
              <Welcome />
              <Parameter />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};
export default withAuthenticator(App);
