import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase'; // comment out this line, line 15 and line 17 if you haven't set the .env environment
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/color';


ReactDOM.render(
    <ThemeProvider theme={theme} >
        {console.log('customTheme: ', theme)}
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </ThemeProvider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();