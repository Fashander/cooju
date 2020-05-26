import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
// const fbApp = app.initializeApp(config)
// const db = fbApp.firestore();
// export default db;


/******************** */
class Firebase {
    constructor() {
        app.initializeApp(config);

        /* Helper */

        // this.serverValue = app.database.ServerValue;
        // this.emailAuthProvider = app.auth.EmailAuthProvider;

        /* Firebase APIs */

        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
        this.rtdb = app.database();

        /* Social Sign In Method Provider */

        // this.googleProvider = new app.auth.GoogleAuthProvider();
        // this.facebookProvider = new app.auth.FacebookAuthProvider();
        // this.twitterProvider = new app.auth.TwitterAuthProvider();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // doSignInWithGoogle = () =>
    //   this.auth.signInWithPopup(this.googleProvider);

    // doSignInWithFacebook = () =>
    //   this.auth.signInWithPopup(this.facebookProvider);

    // doSignInWithTwitter = () =>
    //   this.auth.signInWithPopup(this.twitterProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doSendEmailVerification = () =>
        this.auth.currentUser.sendEmailVerification({
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
        });

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //

    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();

                        // default empty roles
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }

                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            displayName: authUser.displayName,
                            ...dbUser,
                        };

                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    /**
     * User API Declared in components/Firebase/firebase.jsx
     * Return a single user defined by uid from the firestore
     * 
     * @Params user.uid
     */
    user = uid => this.db.doc(`Users/${uid}`);

    /**
     * User API Declared in components/Firebase/firebase.jsx
     * Returns all users snapshot in from the firestore
     *
     * @Params no params needed
     */
    users = () => this.db.collection("Users");

    // *** DOCS API ***workin progress...
    /**
     * Doc API Declared in components/Firebase/firebase.jsx
     * Return a single doc defined by uid from the firestore
     * 
     * @Params doc.uid
     */
    wxDoc = refNo => this.db.doc(`docsFiling/${refNo}`);

    /**
     * Doc API Declared in components/Firebase/firebase.jsx
     * Returns all users snapshot in from the firestore
     *
     * @Params no params needed
     */
    wxDocs = () => this.db.collection("docsFiling");


    /**
     * Realtime database timeStamp 
     * @param null
     */
    rtdbTimeStamp = () => app.database.ServerValue.TIMESTAMP;

    /**
     * storeRef API Declared in components/Firebase/firebase.jsx
     * storage reference to google cloud storage
     *
     * @Params `path` to the required image
     */
    storeRef = path => this.storage.ref().child(`${path}`);

    /**
     * This function returns Server timeStamp
     * 
     * @FieldValue serverTimestamp
     */
    cryptTimeStamp = () => {
        // return firebase.firestore.FieldValue.serverTimestamp();
        return app.firestore.FieldValue.serverTimestamp();
    }


    // *** Message API ***

    // message = uid => this.db.ref(`messages/${uid}`);

    // messages = () => this.db.ref('messages');
}

export default Firebase;
