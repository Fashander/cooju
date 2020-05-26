import React from 'react';
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

/**
 * `withAuthorization` when condition is true will pass `firebase` and `authUser` props alongside
 * other react-dom props: `history`, `match`, `location`;
 * @param {{authUser:any}} condition this checks if the user is authorized or is logged in to view this page
 */
const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
      componentDidMount(){
          this.listener = this.props.firebase.auth.onAuthStateChanged(
              authUser => {
                  if (!condition(authUser)) {
                      this.props.history.push(ROUTES.SIGN_IN);
                  }
              },
          );
      }

      componentWillUnmount(){
          this.listener();
      }

    render() {
      return (
        <AuthUserContext.Consumer>
            {authUser =>
                condition(authUser) ? <Component {...this.props} authUser={authUser} /> : null
            }
        </AuthUserContext.Consumer>
      );
    }
  }
  return compose(
      withRouter,
      withFirebase,
  ) (WithAuthorization);
};
export default withAuthorization;