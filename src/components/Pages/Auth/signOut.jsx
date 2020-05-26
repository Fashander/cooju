import React, { useContext } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { FirebaseContext } from '../../Firebase';
import { AuthUserContext } from '../../Session';


// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
//   root: {
//     position: 'fixed',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useContext(AuthUserContext);
  return (
    authUser &&
    <div className='floatActionButton'>
      <Tooltip title="Logout" arrow={false} placement='left-start' leaveDelay={500} TransitionComponent={Zoom} >
        <Fab onClick={firebase.doSignOut} color="secondary" aria-label="signout">
          <ExitToAppIcon />
        </Fab>
      </Tooltip>
    </div>
  )
};
    
    // <button type="button" onClick={firebase.doSignOut}>
    //   Sign Out
    // </button>
export default SignOutButton;