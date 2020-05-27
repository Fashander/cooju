import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './App.css';
import HeaderBar from './components/UI/Header/NewHeader';
import Landing from './components/Pages/Landing';
import Profile from './components/Pages/Profile';
// import { withAuthentication } from './components/Session';
// import SignInPage, { SignInForm } from './components/Pages/Auth/signIn';
// import SignOutButton from './components/Pages/Auth/signOut';

const App = () => {

  useEffect(() => {
    document.title = "Colledge of Education, Oju";
  }, [])

  return (
    <Router>
    <HeaderBar />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.PROFILE} component={Profile} />
      {/* <Route exact path={ROUTES.SIGN_IN} component={SignInPage} /> */}
    </Switch>
  </Router>
  )
}

export default App