import React, { useContext } from 'react';
const FirebaseContext = React.createContext(null);
export const withFirebase = Component => props => (

  <Component {...props} firebase={useContext(FirebaseContext)} />

  // <FirebaseContext.Consumer>
  //   {firebase => <Component {...props} firebase={firebase} />}
  // </FirebaseContext.Consumer>
);
export default FirebaseContext;