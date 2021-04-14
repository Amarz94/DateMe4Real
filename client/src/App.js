import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch"
import Parameters from "./pages/parametersInput"
import Welcome from "./pages/welcome";




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
            </Route>
          </Switch>
        </div>
      </Router>
  );
};
export default withAuthenticator(App);
