import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

export const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// <Alert severity="error">This is an error message!</Alert>
// <Alert severity="warning">This is a warning message!</Alert>
// <Alert severity="info">This is an information message!</Alert>
// <Alert severity="success">This is a success message!</Alert>