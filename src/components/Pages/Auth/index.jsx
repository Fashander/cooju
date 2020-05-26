import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import RippleLoader from '../../../UI/Loader/rippleLoader';
import { SignInForm } from './signIn';
import { SignUpForm } from './signUp';

const Authenticate = (props) => {
    const [newUser, itsNewUser] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [open, setOpen] = useState(true);
    console.log('[Authentication] >> ', props);
    const setUserState = stat => {
        console.log('setUserState is running...')
        itsNewUser(stat)
    }

    const handleClose = () => {
        setOpen(false);
        props.history.push('/');
    }

    return (
            <div>
                <Dialog open={true} disableBackdropClick={true} disableEscapeKeyDown={true} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <RippleLoader color={'#000'} loading={false} />
                        { newUser ? <SignUpForm action={setUserState} /> : <SignInForm action={setUserState} /> }
                    </DialogContent>
                    <DialogActions>{showButton &&
                        <Button onClick={handleClose} color="primary">
                            CANCEL
                        </Button>}
                    </DialogActions>
                </Dialog>
            </div>
    );
}

export default Authenticate;