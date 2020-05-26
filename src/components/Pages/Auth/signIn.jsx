import React, { useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
// import { SignUpLink } from './signUp';
// import { PasswordForgetLink } from "../pswRst";
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';
import RippleLoader from '../../UI/Loader/rippleLoader';
import Logo from '../../../assets/img/favicon.ico';
import { AuthUserContext } from '../../Session';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/HomeOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
    Button: {
        width: '50%',
        margin: theme.spacing(1),
    },
}));


const SignInPage = () => {
    const authUser = useContext(AuthUserContext)
    const classes = useStyles()
    return (
        <div className='body signinBody'>
            {
                authUser ?
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                        <Typography >
                            You're logged in already
                        </Typography>
                        <Button 
                            className={classes.Button} 
                            variant="contained" 
                            color="primary" 
                            type="submit"
                            href="/"
                            startIcon={ <Home /> }
                        >
                            GOTO HOME
                        </Button>
                    </Typography>
                </Container> :
                <SignInForm />
            }
        </div>
    )
};

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    loading: false
};

const SignInFormBase = props => {
    const [state, setState] = useState({...INITIAL_STATE});
    const onSubmit = event => {
        setState({
            ...state,
            loading: true
        });
        const { email, password } = state;
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setState({ ...INITIAL_STATE });
                props.history.goBack(); //edited from  'props.history.push(ROUTES.LANDING)
            })
            .catch(error => {
                console.log('[Signin Error] >> ', error);
                hideErr();
                setState({
                    ...state,
                    error: {...error},
                    loading: false
                });
            });
        event.preventDefault();
    };
    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const hideErr = () => {
        setTimeout(() => {
            setState({
                ...state,
                error: null
            });
        }, 4000);
    };
    const { email, password, error } = state;
    const isInvalid = (password === '' || password.length < 6 ) || (email === '' || email.length < 8 );
    return (
        <div className='login-div'>
            <img className='logo' src={Logo} alt="sbcLogo"/>
            <div className='title'>WEIXEL Tech</div>
            <div className='sub-title'>Admin SignIn</div>
            <form className='fields' onSubmit={onSubmit} method="post">
                <div className='email'>
                    <svg fill="#999" viewBox="0 0 1024 1024">
                        <path className="path1" d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"></path>
                    </svg><input
                    name="email"
                    value={email}
                    onChange={onChange}
                    className='userEmailInput'
                    type="text"
                    placeholder="Email Address"
                    autoComplete="username"
                />
                </div>
                <div className="password"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input
                    name="password"
                    value={password}
                    onChange={onChange}
                    className='passInput'
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                />
                </div>
                <button className='signin-button' style={{ background: '#706b5f', color: isInvalid ? '#fff' :'#06ff00'}} disabled={isInvalid} type="submit">
                    <div className='buttonVal'>
                        <div className='signinText'>
                            Sign In
                        </div>
                    <RippleLoader color1={'#fff'} color2={'#0f0'} loading={state.loading} />
                    </div>
                </button>
                <div className='err'>{!!error && <p>{state.error.message}</p>}</div>
            </form>
            <div className='link'>
                {/* <PasswordForgetLink /> */}
            </div>
        </div>

    );
}

const SignInLink = () => (
        <p>
            Already a member? <Link to={ROUTES.SIGN_IN} >Sign In</Link>
        </p>
    )

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm, SignInLink };