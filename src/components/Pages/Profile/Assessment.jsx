import React, {Link} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RoundedCorner from '@material-ui/icons/RoundedCorner';
import Check from '@material-ui/icons/CheckCircle';
import Inprogress from './Inprogress';
import CourseHighlight from './CourseHighlight'


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Assessment() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction component={Link} to="/CourseHighlight" label="Home" value="/CourseHighlight" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/InProgress" label="In Progress" value="/Inprogress" icon={<RoundedCorner />} />
      <BottomNavigationAction label="Completed" value="nearby" icon={<Check />} />
      
    </BottomNavigation>
    
    );
}