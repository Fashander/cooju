import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { compose } from "recompose";
import { withFirebase } from '../../../Firebase';
import * as ROUTES from '../../../../constants/routes';
import RippleLoader from '../../../UI/Loader/rippleLoader';
import Logo from '../../../../scss/partials/sbcLogo344.png';
import {SignInLink} from './signIn';
const SignUpPage = () => (
    <div className='body signupBody'>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    ipaddr:'',
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    createdAt: '',
    ipErr: '',
    error: null,
    loading: false
};

const SignUpFormBase = props => {
    const [state, setState] = useState({...INITIAL_STATE});
// class SignUpFormBase extends Component {
//     constructor(props) {
//         super(props);
//         state = { ...INITIAL_STATE };
//     }


    useEffect(() => {
        getIP();
    }, []);

    // get Client's IP Addr
    const getIP = async () => {
        await axios({
            method: 'get',
            url: 'https://api.ipify.org',
            params: 'format=json'
        }).then(res => {
            setState({
                ...state,
                ipaddr: res.data
            });
            console.log('ipAddr: ', res, 'or res.data: ', res.data);
        }).catch(err => {
            console.error(err);
        })
    }
    // console.log('[SignUpFormBase] >> ', props);
    const onSubmit = event => {
        setState({
            ...state,
            loading: true
        });
        let dcrt = props.firebase.cryptTimeStamp();
        const { ipaddr, username, email, passwordOne, ipErr } = state;
        props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user  in firebase realtime database
                return props.firebase
                    .user(authUser.user.uid)
                    .set({
                        ipaddr,
                        username,
                        email,
                        createdAt:dcrt,
                        ipErr
                    },{merge:true});
            })
            .then(() => {
                setState({ ...INITIAL_STATE });
                props.history.push(ROUTES.LANDING);
                // console.log(`username from state ${state.username}, from variable ${username} `,`ipaddr from state: ${state.error}, from var: ${ state.ipaddr }.`);
            })
            .catch(error => {
                console.log(error);
                showErr();
                setState({
                    ...state,
                    error: {...error},
                    loading: false
                });
            });
        event.preventDefault();
        props.firebase.auth.onAuthStateChanged(user => {
            if (user) {
                console.log('[SignUp-onAuthStateChanged] >> ', user);
                user.updateProfile({ displayName: username })
                    .then(() => console.log('[SUCCESSFUL displayName Updated] '))
                    .catch(err => { 
                        console.error(err);
                        throw new Error(err)
                    });
            }
        });

    }
    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };
    
    const showErr = () => {
        setTimeout(() => {
            setState({
                ...state,
                error: null
            });
        }, 4000)
        clearTimeout();
    };
    const { username, email, passwordOne, passwordTwo, error } = state;
    
    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (
        <div className='signup-div'>
            <img className='logo' src={Logo} alt="sbcLogo"/>
            <div className='title'> SiBiCrypt</div>
            <div className='sub-title'>SignUp</div>
            <form className='fields' onSubmit={onSubmit} method="post">
                <div className='username'>
                    <svg fill="#999" viewBox="0 0 1024 1024">
                        <path className="path1" d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"></path>
                    </svg><input
                    name="username"
                    value={username}
                    onChange={onChange}
                    type="text"
                    placeholder="Full Name"
                />
                </div>
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
                    name="passwordOne"
                    value={passwordOne}
                    onChange={onChange}
                    className='passInput'
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                />
                </div>
                <div className="password"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg><input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={onChange}
                    className='passInput'
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                />
                </div>
                <button className='signup-button' disabled={isInvalid} type="submit">
                    <div className='buttonVal'>
                        <div className='signupText'>
                            Sign Up
                        </div>
                        <RippleLoader color={'#fff'} loading={state.loading}/>
                    </div>
                </button>
                <div className='err'>{!!error && <p>{state.error.message}</p>}</div>
            </form>
            <div className='link'>
                <SignInLink />
            </div>
        </div>
    )
}
const SignUpLink = () => (
        <p>
            Don't have an account? <Link to={ROUTES.SIGN_UP} >Sign Up</Link>
        </p>
    )

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);
export default SignUpPage;
export { SignUpForm, SignUpLink };